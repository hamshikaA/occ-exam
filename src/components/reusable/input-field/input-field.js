import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 1.3rem;
  border: 1px solid var(--clr-text-normal);
  border-radius: var(--soft-curve);
  padding: 15px 10px 15px 5px;
  display: block;
  width: 100%;
  padding-left: 30px;
  &::placeholder {
    font-weight: var(--fp-f-weight-very-bold);
  }
  &:focus-visible {
    outline: 1px solid var(--clr-accent-text);
  }
`;

const StyledLabel = styled.label`
  /*Hide label but make it accessible for screen readers*/
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const ErrorMessage = styled.div`
  padding: 5px;
  position: relative;
  font-size: 12px;
  font-style: italic;
  text-align: right;
  color: var(--clr-primary-error);
`;

const ErrorIcon = styled.svg`
  position: absolute;
  top: -60px;
  right: 10px;
  @media only screen and (min-width: 768px) {
  }
`;

const InputField = ({ label, id, errors, ...otherProps }) => {
  return (
    <div className="field__group">
      <StyledInput
        id={id}
        {...otherProps}
        className={errors ? "show__error-input" : ""}
      />
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      {errors && (
        <ErrorMessage className="show__error-msg">
          <p style={{ transform: "translateY(-20px)" }}>{errors}</p>
          <ErrorIcon
            className="show__error-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#FF7979" cx="12" cy="12" r="12" />
              <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
              <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
            </g>
          </ErrorIcon>
        </ErrorMessage>
      )}
    </div>
  );
};

export default InputField;
