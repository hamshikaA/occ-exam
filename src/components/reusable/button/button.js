import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: var(--clr-accent-text);
  box-shadow: 0px 8px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: var(--soft-curve);
  border: 2px solid var(--clr-accent-text);
  color: var(--clr-light-normal);
  margin-bottom: 1rem;
  padding: 1.2rem 3.5rem;
  letter-spacing: 1.6px;
  line-height: 1.4;
  font-weight: var(--fp-f-weight-normal);
  font-size: 11px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: transparent;
    color: var(--clr-accent-text);
  }

  &:focus-visible {
    outline: 2px dotted var(--clr-accent-text);
  }

  ${(props) =>
    props.form_btn &&
    css`
      background: var(--clr-primary-base);
      text-transform: uppercase;
      font-weight: var(--fp-f-weight-bold);
      padding: 1.2rem 2.5rem;
      box-shadow: 0px 5px 1px 0px rgba(32, 126, 85, 0.8);
      border: 2px solid var(--clr-primary-base);
      &:hover {
        background-color: transparent;
        color: var(--clr-primary-base);
      }
    `};
`;

const CustomButton = ({ ...props }) => {
  return <StyledButton {...props} />;
};

export default CustomButton;
