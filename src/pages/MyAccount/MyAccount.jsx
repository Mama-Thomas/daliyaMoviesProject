import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, db } from "../../api/firebase-config";

import { getDoc, doc } from "firebase/firestore";

import { signOut } from "firebase/auth";

import { AuthContext } from "../../components/Auth/Auth";

import { OutlineButton } from "../../components/Button/Button";

import "./MyAccount.scss";
import { useEffect } from "react";

const MyAccount = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDoc, setUserDoc] = useState({});
  const [isloading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    if (currentUser?.uid && isloading === false) {
      const user = async () => {
        await getDoc(doc(db, "users", currentUser.uid)).then((snap) => {
          console.log(snap.data());
          setUserDoc(snap.data());
          console.log(snap.data().name);
          setIsloading(true);
        });
      };
      user();
    }
  }, [currentUser, isloading]);

  // console.log("This is userDoc" + userDoc?.name);

  return (
    <div id="myaccount">
      {Object.keys(userDoc).length !== 0 && (
        <h1 id="pageTitle">{`Welcome,  ${userDoc.name}`}</h1>
      )}
      {/* <h1>{currentUser?.uid}</h1> */}

      <div id="pageItem">
        {/* <h3>
          <Link to={"/moviecollection"}> Personal Info</Link>
        </h3> */}
        <h3>
          <Link to={"/moviecollection"}> Your Movies collection</Link>
        </h3>
        <h3>
          <Link to={"/tvcollection"}>Your Tv Shows collection</Link>
        </h3>
        <h3>
          <Link to={"/peoplecollection"}> Your People collection</Link>
        </h3>

        {currentUser ? (
          <OutlineButton id="pageButton" onClick={logout}>
            Sign Out
          </OutlineButton>
        ) : null}
      </div>
    </div>
  );
};

export default MyAccount;
