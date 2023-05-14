import React from "react";

export function useForm(inputValues) {
  const [formValues, setFormValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return { formValues, handleChange, setFormValues };
}
