export default function validateForm(formData) {
  let errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First Name cannot be empty";
  } else if (!/^[A-Za-z]+/.test(formData.firstName.trim())) {
    errors.firstName = "Enter a valid first name";
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name cannot be empty";
  } else if (!/^[A-Za-z]+/.test(formData.lastName.trim())) {
    errors.lastName = "Enter a valid last name";
  }

  if (!formData.email) {
    errors.email = "Looks like this is not an email";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }
  if (!formData.password) {
    errors.password = "Password cannot be empty";
  }
  console.log(errors);
  return errors;
}
