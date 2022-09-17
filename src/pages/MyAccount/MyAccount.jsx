import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../api/firebase-config";

import { signOut } from "firebase/auth";

import { AuthContext } from "../../components/Auth/Auth";

import "./MyAccount.scss";

const MyAccount = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h1>{`Welcome  ${currentUser?.email}`}</h1>
      {currentUser ? <button onClick={logout}> Sign Out </button> : null}
    </div>
  );
};

export default MyAccount;
