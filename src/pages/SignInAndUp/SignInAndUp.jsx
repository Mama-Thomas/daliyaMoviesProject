import React from 'react';

import "./SignInAndUp.scss";

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const SignInAndUp = () => {
  return (
    <>
      <Login />
      <Register />
    </>
  )
}

export default SignInAndUp;