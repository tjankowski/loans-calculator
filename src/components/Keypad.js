import React from "react";
import styled from "styled-components";
import { Colors } from "./CommonStyles";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8vh);
  grid-template-rows: repeat(4, 8vh);
  gap: 2vh;
`;

const Button = styled.button`
  font-size: 4vh;
  background: ${({ submit }) => (submit ? Colors.green : Colors.white)};
  color: ${({ submit }) => (submit ? Colors.gray : Colors.gray)};
  border-radius: 50%;
  border: none;
  box-shadow: 0 1rem 2rem rgba(40, 42, 46, 0.5);
  transition: box-shadow 0.25s;

  &:hover,
  &:focus {
    color: ${Colors.gray};
    box-shadow: 0 0.5rem 1rem rgba(40, 42, 46, 0.5);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 3vh;
  }
`;

const SecondaryButton = styled(Button)`
  background: ${Colors.transparent};
  color: ${Colors.gray};
  box-shadow: none;
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
