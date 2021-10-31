import React from "react";
import "./custom-button.styles.css";
const CustomButton = ({
  children,
  isGoogle,
  isSubmit,
  isShopItem,
  isLandingBtn,
  isGotoCart,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${isShopItem ? "preview-btn" : ""} ${
        isSubmit ? "submit-btn" : ""
      } ${isGoogle ? "google-btn" : ""} ${isLandingBtn ? "landing-btn" : ""} ${
        isGotoCart ? "gotocart-btn" : ""
      } custom-btn`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
