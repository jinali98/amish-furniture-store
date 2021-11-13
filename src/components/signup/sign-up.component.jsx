import { Component } from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpStarted } from "../../redux/user/user.actions";
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
    const { signup } = this.props;
    if (password !== confirmPassword) return;
    signup(email, password, displayName);
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     email: "",
    //     password: "",
    //     displayName: "",
    //     confirmPassword: "",
    //   });
    // } catch (err) {
    //   console.log(err.message);
    // }
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

const mapDispatchToProps = (dispatch) => ({
  signup: (email, password, displayName) =>
    dispatch(SignUpStarted({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
