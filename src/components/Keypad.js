import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "./CommonStyles";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8vh);
  grid-template-rows: repeat(4, 8vh);
  gap: 2vh;
`;

const backspace = keyframes`
  0%, 100% {
    transform: translate(0);
  }
  30% {
    transform: translate(-0.2rem);
  }
  60% {
    transform: translate(0.1rem);
  }
`;

const Button = styled.button`
  font-size: 4vh;
  background: ${Colors.white};
  color: ${Colors.gray};
  border-radius: 50%;
  border: none;
  box-shadow: 0 1rem 2rem rgba(40, 42, 46, 0.5);
  transition: box-shadow 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: ${Colors.gray};
    box-shadow: 0 0.5rem 0.5rem rgba(40, 42, 46, 0.3);
  }

  & > svg {
    width: 2.5vh;
    height: 2.5vh;
  }
`;

const SecondaryButton = styled(Button)`
  background: ${Colors.transparent};
  color: ${Colors.gray};
  box-shadow: none;
  transition: all 0.5s;

  &:hover,
  &:focus {
    color: ${Colors.green};
    animation: ${backspace} 1.2s linear infinite;
    box-shadow: none;
  }
`;

const Keys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

export default function Keypad({ onPress, onBackspace }) {
  return (
    <Container>
      {Keys.map((item) => (
        <Button key={item} type="button" onClick={() => onPress(item)}>
          {item}
        </Button>
      ))}
      <span></span>
      <Button type="button" onClick={() => onPress(0)}>
        0
      </Button>
      <SecondaryButton type="button" onClick={onBackspace}>
        <BackspaceOutlinedIcon />
      </SecondaryButton>
    </Container>
  );
}
