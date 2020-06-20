import React, { useState } from "react";
import { useStore } from "../store";
import { FormFields, FormFieldsValueRange } from "../store/constants";
import Keypad from "../components/Keypad";
import Summary from "../components/Summary";
import Navigation from "../components/Navigation";
import {
  ValueContainer,
  Label,
  Input,
  SliderWrapper,
  Error,
  Form,
  Wrapper,
  StepsWrapper,
  Steps,
  Slider,
} from "./FormStyles";

function createMarks(values, unit) {
  return values.map((value) => ({
    value,
    label: `${unit}${value}`,
  }));
}

const onChange = (field, callback) => (event) => {
  callback(field, event.target.value);
};
const onSliderChange = (field, callback) => (event, newValue) => {
  callback(field, newValue);
};

const onKeyPress = (field, value, callback) => (key) => {
  let newValue = value > 0 ? value + key.toString() : key;
  callback(field, newValue);
};

const onBackspace = (field, value, callback) => () => {
  const stringValue = value.toString();
  let newValue = Number.parseInt(
    stringValue.length > 1 ? stringValue.slice(0, -1) : 0
  );
  callback(field, newValue);
};

const labels = {
  [FormFields.amount]: "I want to borrow...",
  [FormFields.duration]: "For how long...",
};

function renderStep(
  field,
  fieldValue,
  onValueChange,
  onStepChange,
  label,
  min,
  max,
  sliderStep = 1,
  unit = ""
) {
  const marks = createMarks([min, max], unit);
  return (
    <ValueContainer key={field} onClick={() => onStepChange(field)}>
      <Label>{label}</Label>
      <Input
        id={field}
        type="number"
        required={true}
        min={min}
        max={max}
        value={fieldValue.value}
        onChange={onChange(field, onValueChange)}
      />
      <SliderWrapper>
        <Slider
          value={fieldValue.value}
          step={sliderStep}
          min={min}
          max={max}
          marks={marks}
          onChange={onSliderChange(field, onValueChange)}
          valueLabelDisplay="off"
        />
      </SliderWrapper>
      {fieldValue.isError && (
        <Error>{`The value has to be between ${unit}${min} and ${unit}${max}`}</Error>
      )}
    </ValueContainer>
  );
}

export default function FormComponent() {
  const { state, actions } = useStore();
  const [step, setStep] = useState(FormFields.amount);
  const { currency, form, quote } = state;
  const { amount, duration } = form;
  const { onFormChange } = actions;

  const steps = Object.keys(FormFields).map((field) =>
    renderStep(
      field,
      form[field],
      onFormChange,
      setStep,
      labels[field],
      FormFieldsValueRange[field][0],
      FormFieldsValueRange[field][1],
      field === FormFields.amount ? 10 : 1,
      field === FormFields.amount ? currency.label : ""
    )
  );
  return (
    <Form>
      <Navigation
        amount={amount.value}
        duration={duration.value}
        onStepClick={(step) => setStep(step)}
      />
      <Wrapper>
        <StepsWrapper>
          <Steps selected={step}>{steps}</Steps>
        </StepsWrapper>
        <Keypad
          onPress={onKeyPress(step, form[step].value, onFormChange)}
          onBackspace={onBackspace(step, form[step].value, onFormChange)}
        />
      </Wrapper>
      <Summary
        isInvalid={amount.isError || duration.isError}
        quote={quote}
        amount={amount.value}
        duration={duration.value}
        onRetry={() => {
          actions.quote(amount.value, duration.value);
        }}
      />
    </Form>
  );
}
