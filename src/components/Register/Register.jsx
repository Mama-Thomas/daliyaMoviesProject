import React, { useState, useContext } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged,  } from "firebase/auth";

import {collection,getDoc, addDoc, setDoc, doc} from "firebase/firestore";

import { auth, db } from "../../api/firebase-config";

import { OutlineButton } from "../Button/Button";

import { AuthContext } from "../Auth/Auth";

import "./Register.scss";

const Register = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [registerName, setName] = useState("");

  // const { currentUser } = useContext(AuthContext);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword)
        
       
      console.log(user);

    } catch (error) {
      console.log(error);
    }
  };


  

  const sendData = () => {
    onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
      setDoc(doc(db, "users", currentUser.uid), {
        name: registerName,
        userId: currentUser.uid,
        email: registerEmail,
        password: registerPassword,
        moviesCol: [],
        TvCol: [],
        PeopleCol: []
      });

    }
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  register();
  sendData();
};

  return (
    <>
      <div id="signUpformInput">
        <h3 id="signUpTitle">I do not have a account</h3>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <input
            className="signInputs"
            placeholder="Name..."
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            autoComplete="on"
            required
          />

          <input
            id="signUpEmailInput"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            type="email"
            autoComplete="on"
            required
          />
          <input
            id="signUpPasswordInput"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            type="password"
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
