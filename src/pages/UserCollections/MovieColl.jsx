import React, { useContext, useEffect, useState, useReducer } from "react";

import { Link } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebase-config";
import { AuthContext } from "../../components/Auth/Auth";

import tmdbApi, { category } from "../../api/tmdbApi";

import apiConfiguration from "../../api/apiConfiguration";

import MovieCard from "../../components/MovieCard/MovieCard";

import Button from "../../components/Button/Button";

import "./UserCollection.scss";
import { get } from "enzyme/build/configuration";

const MovieColl = () => {
  const { currentUser } = useContext(AuthContext);

  const [userDoc, setUserDoc] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  let moL = [];
  let mObject = [];
  let repeatDoc = []

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


 /*  const getMoL = async (movie) => {
    if (currentUser?.uid && isloaded === true && nameLoaded === false) {
      const responds = await tmdbApi.getById("movie", movie);
      //  console.log(responds)

      const data = await responds.title;
      console.log(data);
      //  myList.push(data)
      setMoviesList(data);
      moL.push(data);
      setNameLoaded(true);
      //  setMoviesList();

      //  setIsloaded(null)
      return (
        <h1>{data}</h1>
       )
    }
  }
 */
  console.log(userDoc);

  /* useEffect(() => {
     userDoc.map(async (item) => {
        const response = await tmdbApi.getById("movie", item);

        const data = response.title;
        console.log(data);
        mObject.push(response);
  
    return () => {
      second
    }
  }, [third])
   */

  const myTry = () => {
    if ( isloaded === true && nameLoaded === false) {
        userDoc.map(async (item) => {
        const response = await tmdbApi.getById("movie", item);

        const title = response.title;
        // console.log(data);
        
        console.log(response);
       const result = response;

       /* let duplicate = false;

       moviesList.forEach(el => {
        if(el.title === title){
          duplicate = true
        }
        
       }); */

       /* const isDuplicate = () =>
         moviesList.some((el) =>
           Object.entries(result).every(([key, value]) => value === el[key])
         );

        if(!isDuplicate){
        setMoviesList((moviesList) =>
          Array.from(new Set([...moviesList, result]))
        );} */

        setMoviesList((moviesList) =>
          Array.from(new Set([...moviesList, result]))
        );
        // setMoviesList(moviesList => [...moviesList,response]);
        // moL.push(data);
        // setNameLoaded(true);
      // setNameLoaded(true);

        // let response = getMoL(item);
        // mObject.push(response);
        // return console.log(mObject);
        return console.log(moviesList);

      });
      setNameLoaded(true);

    }
}

myTry();
  // console.log(mObject)

  let myList = [];
  

 return (
   <>
     <div>
       
       {
         moviesList.map(
           (item, i) => {

          return (
            <h1 key={i}>{item.title}</h1>
            // <h1 key={i}>{item.backdrop_path}</h1>
          );
           
         
          }
       )}
     </div>
   </>

 );


};

export default MovieColl;
