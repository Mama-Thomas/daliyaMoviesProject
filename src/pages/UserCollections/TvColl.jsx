import React, { useContext, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebase-config";
import { AuthContext } from "../../components/Auth/Auth";

import tmdbApi from "../../api/tmdbApi";

import MovieCard from "../../components/MovieCard/MovieCard";

import "./UserCollection.scss";
import "../../components/MovieDirectory/MovieDirectory.scss";

const TvColl = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDoc, setUserDoc] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const getUser = () => {
    if (currentUser?.uid && isloaded === false) {
      getDoc(doc(db, "users", currentUser.uid)).then((snap) => {
        console.log(snap.data());
        setUserDoc(snap.data().TvCol);
        console.log(snap.data().TvCol);
        setIsloaded(true);
      });
    }
  };

  getUser();

  console.log(isloaded);

  console.log(userDoc);

  const myTry = () => {
    if (isloaded === true && nameLoaded === false) {
      userDoc.map(async (item) => {
        const response = await tmdbApi.getById("tv", item);

        console.log(response);
        const result = response;
        console.log(result);

        setItemsList((itemsList) =>
          Array.from(new Set([...itemsList, result]))
        );

        console.log(result);

        return console.log(itemsList);
      });
      setNameLoaded(true);
    }
  };

  myTry();

  return (
    <>
      <h3 id="title">My Tv Collection:</h3>
      <div className="mymovie-list">
        {itemsList.map((item, i) => (
          <MovieCard item={item} category="tv" id="colItem" />
        ))}
      </div>
    </>
  );
};

export default TvColl;
