import React, { useState, useContext } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../api/firebase-config";

import { OutlineButton } from "../Button/Button";

import { AuthContext } from "../Auth/Auth";

import "./Login.scss";

const Login = (props) => {
  // const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { currentUser } = useContext(AuthContext);
  
  


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login();
  };

  return (
    <>
      <div id="signInformInput">
        <h3 id="signInTitle">I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <input
            className="signInputs"
            placeholder="Email..."
            type="email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            autoComplete="on"
            required
          />
          <input
            className="signInputs"
            placeholder="Password..."
            type="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            autoComplete="on"
            required
          />
          <OutlineButton className="signInButton" type="submit">
            Sign In
          </OutlineButton>
        </form>

        {console.log(currentUser)}
      </div>
    </>
  );
};

export default Login;
