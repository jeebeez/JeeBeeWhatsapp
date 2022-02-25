import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }
  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src="./login-logo.png" alt="Logo" />
          <div className="login__text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <div className="login__buttons">
            <Button
              onClick={() => {
                auth.signInWithEmailAndPassword(
                  process.env.REACT_APP_TEST_EMAIL,
                  process.env.REACT_APP_TEST_PASSWORD
                );
              }}
            >
              Sign in with test credentials
            </Button>

            <Button onClick={login}>Sign in with Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
