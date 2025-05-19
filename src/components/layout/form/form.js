import React from "react";
import FormLogin from "./formLogin";
// import FormSuccess from "./formSuccess";

const Form = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const submitForm = () => {
  //   setIsSubmitted(true);
  // };

  return (
    <React.Fragment>
      <FormLogin />
      {/*!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />*/}
    </React.Fragment>
  );
};
export default Form;
