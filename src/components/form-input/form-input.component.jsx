import React from "react";
import { FormInputGroup, FormLabel, FormInputField } from "./form-input.styles";

const FormInput = ({ label, inputChangeHandler, ...otherProps }) => {
  return (
    <FormInputGroup>
      <FormLabel>{label}</FormLabel>
      <FormInputField {...otherProps} onChange={inputChangeHandler} />
    </FormInputGroup>
  );
};

export default FormInput;
