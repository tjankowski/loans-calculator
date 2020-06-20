import quote from "../api";
import { FormFieldsValueRange, FormFields } from "../store/constants";
import debounce from "lodash.debounce";

export const actionTypes = {
  QUOTE_FETCH: "quote.fetch",
  QUOTE_SUCCESS: "quote.success",
  QUOTE_ERROR: "quote.error",
  FORM_INPUT: "form.input",
};

export const useActions = (state, dispatch) => ({
  quote: (amount, duration) => {
    return fetchQuote(dispatch, { amount, duration });
  },
  onFormChange: (field, input) => {
    const value = validateFormInput(field, input);
    dispatch(action(actionTypes.FORM_INPUT, { field, value }));
    if (!value.isError) {
      return fetchQuote(dispatch, {
        amount: state.form[FormFields.amount].value,
        duration: state.form[FormFields.duration].value,
        [field]: value.value,
      });
    }
    return null;
  },
});

const fetchQuote = debounce((dispatch, { amount, duration }) => {
  dispatch(action(actionTypes.QUOTE_FETCH, { amount, duration }));
  return quote(amount, duration)
    .then((data) => {
      dispatch(action(actionTypes.QUOTE_SUCCESS, data));
    })
    .catch((error) => {
      dispatch(action(actionTypes.QUOTE_ERROR, error));
    });
}, 200);

function validateFormInput(field, value) {
  const [min, max] = FormFieldsValueRange[field];
  return {
    isError: value < min || value > max,
    value: Number(value > max ? max : value),
  };
}

export function action(type, payload) {
  return {
    type,
    payload,
  };
}
