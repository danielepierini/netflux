import { useState } from "react";
import "./loginPage.css";
import SignupPage from "./SignupPage";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          className="loginPage__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <button onClick={() => setSignIn(true)} className="loginPage__button">
          Sign In
        </button>

        <div className="loginPage__gradient" />
      </div>

      <div className="loginPage__body">
        {signIn ? (
          <SignupPage />
        ) : (
          <>
            <h1>
              {" "}
              Unlimited movies, TV <br />
              shows, and more.
            </h1>
            <h2>Watch anywhere. Cancel any time</h2>
            <h3>
              {" "}
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginPage__input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginPage__getStarted"
                >
                  Get Started{" "}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
