import { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.css";

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

    if (password !== confirmPassword) return;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="signin-container">
        <h2 className="signin-title">SIGN UP</h2>
        <form onSubmit={this.formSubmitHandler}>
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

          <div className="buttons">
            <CustomButton isSubmit type="submit">
              sign up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
