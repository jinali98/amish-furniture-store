import { Component } from "react";
import { connect } from "react-redux";
import { SignUpStarted } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { Buttons, Form, SignInContainer, SignInTitle } from "./sign-up.styles";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  inputChangeHandler = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  formSubmitHandler = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signup } = this.props;
    if (password !== confirmPassword) return;
    signup(email, password, displayName);
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>SIGN UP</SignInTitle>
        <Form onSubmit={this.formSubmitHandler}>
          <FormInput
            className="form-input"
            type="text"
            value={this.state.displayName}
            name="displayName"
            required
            inputChangeHandler={this.inputChangeHandler}
            label="Display Name"
          />
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
          <FormInput
            className="form-input"
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            required
            inputChangeHandler={this.inputChangeHandler}
            label="Confirm Password"
          />

          <Buttons>
            <CustomButton isSubmit type="submit">
              sign up
            </CustomButton>
          </Buttons>
        </Form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (email, password, displayName) =>
    dispatch(SignUpStarted({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
