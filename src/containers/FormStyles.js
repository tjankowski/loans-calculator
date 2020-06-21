import styled from "styled-components";
import MaterialSlider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { Colors } from "../components/CommonStyles";
import { FormFields } from "../store/constants";

export const Slider = withStyles({
  root: {
    color: Colors.green,
  },
})(MaterialSlider);

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0;
`;
export const Input = styled.input`
  border: none;
  width: 28vh;
  text-align: right;
  font-size: 5vh;
  font-weight: bold;
  caret-color: ${Colors.green};
  color: ${Colors.darkGreen};
  background: ${Colors.transparent};
  top: 0;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SliderWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -2rem;
`;

export const StepsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 6vh;
`;

export const Steps = styled.div`
  width: 60vh;
  height: 10vh;
  display: block;
  overflow: visible;
  background: white;
  transition: transform 0.5s;
  transform: translateX(
    ${({ selected }) => (selected === FormFields.amount ? 11 : -21)}vh
  );

  &:hover > div {
    transform: translateX(
      ${({ selected }) => (selected === FormFields.amount ? -10 : 0)}vh
    );
  }

  & > div:first-child:hover,
  & > div:first-child:hover + div {
    transform: translateX(
      ${({ selected }) => (selected === FormFields.amount ? 0 : 10)}vh
    );
  }
`;

export const ValueContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  transition: transform 0.5s;

  &:first-child {
    margin-right: 4vh;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 100%;
  background: ${Colors.blue};
  color: ${Colors.white};
  font-size: 1.5vh;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-left: 25%;
  width: 75%;
`;

export const Label = styled.label`
  bottom: 100%;
  font-size: 3vh;
  font-weight: bold;
  color: ${Colors.green}30;
  display: block;
`;

export const Note = styled.div`
  align-self: center;
  padding: 0.5vh;
  font-size: 1.25vh;
  color: #4c956cdd;
`;
