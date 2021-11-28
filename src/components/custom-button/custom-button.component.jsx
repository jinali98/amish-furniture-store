import React from "react";
import { CustomButtonWrapper } from "./custom-button.styles";
const CustomButton = ({ children, ...otherProps }) => {
  return <CustomButtonWrapper {...otherProps}>{children}</CustomButtonWrapper>;
};

export default CustomButton;
