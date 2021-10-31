import React from "react";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/sign-up.component";
import "./signin-signup.styles.css";
const SigninSignup = () => {
  return (
    <div className="signinsignup-container">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninSignup;
