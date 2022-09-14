import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../api/firebase-config";

import { OutlineButton } from "../Button/Button";

import "./Register.scss";

const Register = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  }

  return (
    <>
      <div id="signUpformInput">
        <h3 id="signUpTitle">I do not have a account</h3>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <input
            id="signUpEmailInput"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            autoComplete="on"
            required
          />
          <input
            id="signUpPasswordInput"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            autoComplete="on"
            required
          />

          <OutlineButton className="signUpButton" type="submit">
            Sign Up
          </OutlineButton>
        </form>
      </div>
    </>
  );
};

export default Register;
