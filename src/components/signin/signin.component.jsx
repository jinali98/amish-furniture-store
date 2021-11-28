import { Component } from "react";
import { connect } from "react-redux";
import {
  emailSigninStarted,
  googleSigninStarted,
} from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Buttons, Form, SignInContainer, SignInTitle } from "./signin.styles";

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  inputChangeHandler = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  formSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSigninStart } = this.props;
    emailSigninStart(email, password);
  };

  render() {
    const { googleSignIn } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>SIGN IN</SignInTitle>
        <Form onSubmit={this.formSubmitHandler}>
          <FormInput
            className="form-input"
            type="email"
            value={this.state.email}
            name="email"
            required
            inputChangeHandler={this.inputChangeHandler}
            label="Email"
          />
          <FormInput
            className="form-input"
            type="password"
            value={this.state.password}
            name="password"
            required
            inputChangeHandler={this.inputChangeHandler}
            label="Password"
          />

          <Buttons>
            <CustomButton isSubmit type="submit">
              sign in
            </CustomButton>
            <CustomButton type="button" onClick={googleSignIn} isGoogle>
              sign in with Google
            </CustomButton>
          </Buttons>
        </Form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSigninStarted()),
  emailSignIn: (email, password) =>
    dispatch(emailSigninStarted({ email, password })),
});
export default connect(null, mapDispatchToProps)(Signin);
