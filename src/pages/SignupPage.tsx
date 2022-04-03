import useInput from "../hooks/use-input";

import "./signupPage.css";

const SignupPage = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: any) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value: any) => value.length !== 0);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } else formIsValid = false;

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    console.log(enteredEmail);
    console.log(enteredPassword);

    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <div className="signup__Page">
      <form onSubmit={formSubmissionHandler}>
        <h1>Sign In</h1>
        <input
          placeholder="Email or phone number"
          type="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error__text">
            Please enter a valid email or phone number.
          </p>
        )}
        <input
          placeholder="Password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p className="error__text">
            Your password must contain between 4 and 60 characters.{" "}
          </p>
        )}

        <button disabled={!formIsValid} type="submit">
          Sign In
        </button>
        <div className="support">
          <div className="remember">
            <span>
              <input type="checkbox"></input>
            </span>
            <span> Remember me</span>
          </div>
          <div className="need__help">Need help ?</div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
