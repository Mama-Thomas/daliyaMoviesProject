import React, { useContext, useState} from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebase-config";
import { AuthContext } from "../../components/Auth/Auth";

import tmdbApi from  "../../api/tmdbApi";

import MovieCard from "../../components/MovieCard/MovieCard";


import "./UserCollection.scss";
import  "../../components/MovieDirectory/MovieDirectory.scss";


const MovieColl = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDoc, setUserDoc] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  


  const getUser = () => {
    if (currentUser?.uid && isloaded === false) {
      getDoc(doc(db, "users", currentUser.uid)).then((snap) => {
        console.log(snap.data());
        setUserDoc(snap.data().moviesCol);
        console.log(snap.data().moviesCol);
        setIsloaded(true);
      });
    }
  };

  getUser();

  console.log(isloaded);


 
  console.log(userDoc);


  const myTry = () => {
    if ( isloaded === true && nameLoaded === false) {
        userDoc.map(async (item) => {
        const response = await tmdbApi.getById("movie", item);
        
        console.log(response);
       const result = response;
       console.log(result)

        setMoviesList((moviesList) =>
          Array.from(new Set([...moviesList, result]))
        );
        
       console.log(result);

        
        return console.log(moviesList);

      });
      setNameLoaded(true);


    }
   
}



myTry();
  
 
return (
  <>
    <h3 id="title">My Movie Collection:</h3>
    <div className="mymovie-list">
      {moviesList.map((item, i) => (
        <MovieCard item={item} category="movie" id="colItem" />
      ))}
    </div>
  </>
);

};

export default MovieColl;