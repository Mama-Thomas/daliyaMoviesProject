import React, { useContext, useState, useEffect } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebase-config";
import { AuthContext } from "../../components/Auth/Auth";

import tmdbApi from "../../api/tmdbApi";

import MovieCard from "../../components/MovieCard/MovieCard";

import "./UserCollection.scss";
import "../../components/MovieDirectory/MovieDirectory.scss";

const MovieColl = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDoc, setUserDoc] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const getUser = () => {
      if (currentUser?.uid && isloaded === false) {
        getDoc(doc(db, "users", currentUser.uid)).then((snap) => {
          console.log(snap.data());
          setUserDoc(snap.data().PeopleCol);
          console.log(snap.data().PeopleCol);
          setIsloaded(true);
        });
      }
    };

    getUser();
  }, [currentUser?.uid, isloaded]);

  useEffect(() => {
    const myTry = () => {
      if (isloaded === true && nameLoaded === false) {
        userDoc.map(async (item) => {
          const response = await tmdbApi.getById("person", item);

          console.log("response got here!!", response);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDoc]);

  return (
    <>
      <h3 id="title">My People Collection:</h3>
      <div className="mymovie-list custom-list">
        {itemsList.map((item, i) => (
          <MovieCard item={item} category="person" id="colItem" key={item.id} />
        ))}
      </div>
    </>
  );
};

export default MovieColl;
