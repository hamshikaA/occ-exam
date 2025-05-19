import React from "react";
import useForm from "./useForm";
import validate from "../../../helpers/validate";
import Button from "../../reusable/button/button";
import FormField from "../../reusable/input-field/input-field";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: var(--clr-light-normal);
  border-radius: var(--soft-curve);
  padding: 1rem;
  box-shadow: 0px 8px 1px 0px rgba(0, 0, 0, 0.15);
  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const Form = ({ submitForm }) => {
  const { handleUpdate, handleSubmit, formData, errors } = useForm(
    validate,
    submitForm
  );

  const handleButton = () => {
    console.log("Button was clicked");
  };

  return (
    <React.Fragment>
      <Button onClick={() => handleButton()}>
        <span className="content__btn">Try it free 7 days</span> then $20/mo.
        thereafter
      </Button>
      <StyledForm action="/index.html" method="get" onSubmit={handleSubmit}>
        <fieldset>
          <div className="flex__container">
            <FormField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleUpdate("firstName", e)}
              label="First Name"
              aria-label="First Name Form Field"
              id="first_name"
              errors={errors.firstName}
            />
          </div>
          <div>
            <FormField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleUpdate("lastName", e)}
              label="Last Name"
              aria-label="Last Name Form Field"
              id="last_name"
              errors={errors.lastName}
            />
          </div>
          <div>
            <FormField
              type="email"
              name="email"
              placeholder="First Name"
              value={formData.email}
              onChange={(e) => handleUpdate("email", e)}
              label="Email"
              aria-label="Email Form Field"
              id="form_email"
              errors={errors.email}
            />
          </div>
          <div>
            <FormField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleUpdate("password", e)}
              label="Password"
              aria-label="Password Form Field"
              id="form_password"
              errors={errors.password}
            />
          </div>

          <Button form_btn>Claim your free trial</Button>
        </fieldset>

        <p className="content__body">
          By clicking the button, you are agreeing to our
          <strong className="content__terms"> Terms and Services</strong>
        </p>
      </StyledForm>
    </React.Fragment>
  );
};
export default Form;
