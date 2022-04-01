import { useState } from "react";

import "./signupPage.css";

const SignupPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const enteredPasswordIsValid =
    enteredPassword.length !== 0 && enteredPassword.length === 4;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } else formIsValid = false;

  const emailInputChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event: any) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputBlurHandler = (event: any) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (event: any) => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    console.log(enteredEmail);
    console.log(enteredPassword);
    setEnteredPassword("");
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  };

  return (
    <div className="signup__Page">
      <form onSubmit={formSubmissionHandler}>
        <h1>Sign In</h1>
        <input
          placeholder="Email or phone number"
          type="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error__text">
            Please enter a valid email or phone number.
          </p>
        )}
        <input
          placeholder="Password"
          type="password"
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
          value={enteredPassword}
        />
        {passwordInputIsInvalid && (
          <p className="error__text">
            Your password must contain between 4 and 60 characters.{" "}
          </p>
        )}

        <button disabled={!formIsValid} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
