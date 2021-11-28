import React from "react";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/sign-up.component";
import { SigninSignupPageWrapper } from "./signin-signup.styles";

const SigninSignup = () => {
  return (
    <SigninSignupPageWrapper>
      <Signin />
      <Signup />
    </SigninSignupPageWrapper>
  );
};

export default SigninSignup;
