import { useState } from "react";

import "./signupPage.css";

const SignupPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  // const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] = useState(false);

  const emailInputChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event: any) => {
    setEnteredEmailTouched(true);
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
  };

  // const passwordInputChangeHandler = (event: any) => {
  //   setEnteredPassword(event.target.value);
  // };

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }

    setEnteredEmailIsValid(true);

    setEnteredEmail("");
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

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
          // onChange={passwordInputChangeHandler}
          // value={enteredPassword}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignupPage;
