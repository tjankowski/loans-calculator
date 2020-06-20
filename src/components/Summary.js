import React from "react";
import styled from "styled-components";
import { Colors } from "./CommonStyles";
import { Currency } from "../store/constants";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4vh;
  font-size: 1.5vh;
  background: ${Colors.blue};
  color: ${Colors.white};
  justify-content: space-between;

  align-items: center;
  box-shadow: 0rem -0.5rem 2rem rgba(40, 42, 46, 0.25);
`;

const Quote = styled.div`
  padding-right: 2vh;
`;
const Value = styled.div`
  display: flex;
  padding-top: 1vh;
  justify-content: space-between;
  & > label {
    margin-right: 1vh;
  }

  &:first-child {
    font-weight: bold;
    font-size: 2vh;
    padding-top: 0;
    padding-bottom: 1vh;
  }

  &:last-child {
    font-weight: bold;
  }
`;

const Button = styled.button`
  white-space: nowrap;
  border-radius: 0.5rem;
  width: 14vh;
  padding: 2vh;
  font-size: 1.5vh;
  font-weight: bold;
  border: none;
  color: ${Colors.gray};
  background: ${Colors.pink};
  text-transform: uppercase;
  box-shadow: 0rem -0.5rem 2rem rgba(40, 42, 46, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
  }
`;

const labels = {
  monthlyPayment: "Monthly payment",
  apr: "Representative APR",
  totalInterest: "Total interest",
  totalPayable: "Total repayable",
};

function Labels({ values, isFetching }) {
  return (
    <div>
      {Object.keys(labels).map((key, index) => (
        <Value key={index}>
          <label>{labels[key]}</label>
          <span>{isFetching ? <Skeleton width={"7vh"} /> : values[index]}</span>
        </Value>
      ))}
    </div>
  );
}

export default function Summary({
  isInvalid,
  amount,
  duration,
  quote,
  onRetry,
}) {
  const values = quote.data
    ? [
        `${Currency[quote.data?.monthlyPayment?.currency]?.label}${
          quote.data?.monthlyPayment?.amount
        }`,
        `${quote.data ? (quote.data.apr * 100).toFixed() : null}%`,
        `${Currency[quote.data?.totalInterest?.currency]?.label}${
          quote.data?.totalInterest?.amount
        }`,
        `${Currency[quote.data?.totalPayable?.currency]?.label}${
          quote.data?.totalPayable?.amount
        }`,
      ]
    : Array.from({ length: Object.keys(labels).length }, () => "?");

  return (
    <SkeletonTheme color={Colors.green} highlightColor={Colors.pink}>
      <Container>
        <Quote>
          {quote.isError ? (
            <span>Error occured during calculation. Please try again.</span>
          ) : (
            <Labels values={values} isFetching={quote.isFetching} />
          )}
        </Quote>
        <div>
          {quote.isFetching ? (
            <Button type="button" disabled>
              <HourglassEmptyOutlinedIcon fontSize="small" />
            </Button>
          ) : quote.isError ? (
            <Button type="button" onClick={onRetry}>
              Try again
              <ReplayOutlinedIcon />
            </Button>
          ) : isInvalid ? null : (
            <Button onClick={() => {}} type="button">
              Continue
              <ArrowForwardOutlinedIcon />
            </Button>
          )}
        </div>
      </Container>
    </SkeletonTheme>
  );
}
