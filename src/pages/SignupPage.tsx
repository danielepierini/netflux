import "./signupPage.css";

const SignupPage = () => {
  return (
    <div className="signup__Page">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email or phone number" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignupPage;
