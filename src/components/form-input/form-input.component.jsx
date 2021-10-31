import React from "react";
import "./form-input.styles.css";

const FormInput = ({ label, inputChangeHandler, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        {...otherProps}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default FormInput;
