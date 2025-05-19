import { useState } from "react";

const useForm = (validate) => {
  // Set initial Form State values to empty strings
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Set empty object to use later in the validate function
  const [errors, setErrors] = useState({});

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles the onchange event when users type in input values
  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  // Handles the action when user clicks on the form button and resets the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    // setIsSubmitting(true);
  };

  //
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  return { handleUpdate, handleSubmit, formData, errors };
};

export default useForm;
