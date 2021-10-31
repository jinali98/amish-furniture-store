import { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.css";

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

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="signin-container">
        <h2 className="signin-title">SIGN IN</h2>
        <form onSubmit={this.formSubmitHandler}>
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

          <div className="buttons">
            <CustomButton isSubmit type="submit">
              sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogle type="submit">
              sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
