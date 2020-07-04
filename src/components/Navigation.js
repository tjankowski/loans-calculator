import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { Colors } from "./CommonStyles";
import { FormFields } from "../store/constants";

const Navigation = styled.nav`
  display: flex;
  color: ${Colors.gray};
  padding: 2vh;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5vh;
`;

const Logo = styled.a`
  color: ${Colors.green};
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 0.5rem;
    height: 4vh;
    width: 4vh;
  }
`;

const Tabs = styled.ul`
  list-style: none;
  font-weight: bold;
  & > li {
    width: 2vh;
    text-align: center;
    color: ${Colors.green};
    cursor: pointer;
    margin: 0 0.5vh;
    display: inline-block;
    transition: color 0.5s;

    &:first-child {
      width: 5vh;
    }

    &:hover {
      color: ${Colors.pink};
    }

    & > a:visited,
    & > a {
      color: currentColor;
      outline: none;
    }
  }
`;

export default function NavigationComponent({ amount, duration, onStepClick }) {
  const onNavigate = (item) => (event) => {
    event.preventDefault();
    onStepClick(item);
  };
  return (
    <Navigation>
      <Logo>
        <LogoIcon />
        TreeLoan*
      </Logo>
      <Tabs>
        I want to borrow
        <li onClick={onNavigate(FormFields.amount)}>
          <a href="/#value">£{amount}</a>
        </li>
        for
        <li onClick={onNavigate(FormFields.duration)}>
          <a href="/#duration">{duration}</a>
        </li>
        months
      </Tabs>
    </Navigation>
  );
}
