import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import "./Login.css";
import Firebase from "../firebase/config";
import { AuthContext } from "../Auth/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        Firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log("Welcome: " + user.email);
          }
        });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const signUp = () => {
    history.push("/signup");
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      <section className="form animated flipInX">
        <h2>Login</h2>
        <form className="loginbox" onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button id="submit">Login</button>
          <br></br>
          <br></br>
        </form>
        <button id="submit" onClick={signUp}>
          Sign Up
        </button>
      </section>
    </div>
  );
};

export default withRouter(Login);
