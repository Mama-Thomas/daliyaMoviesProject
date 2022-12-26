import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { firebase} from "firebase/app";

import { arrayUnion } from "firebase/firestore";


import tmdbApi from "../../api/tmdbApi";
import apiConfiguration from "../../api/apiConfiguration";

import { db } from "../../api/firebase-config";
import {doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../components/Auth/Auth";


import "./Detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";

import MovieDirectory from '../../components/MovieDirectory/MovieDirectory';
import { OutlineButton } from "../../components/Button/Button";

const Detail = props => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  // const [isloading, setIsloading] = useState(false);

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  const addToCollection = async() => {
    try {
      if (category === "movie") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          moviesCol: arrayUnion(id),
        });
        console.log("Added to " + category);

      } else if (category === "tv") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          TvCol: arrayUnion(id),
        });
        console.log("Added to " + category);

      } else if (category === "person") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          PeopleCol: arrayUnion(id),
        });
        console.log("Added to " + category);
      }

    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfiguration.ORIGINAL_IMAGE(
                item.poster_path || item.backdrop_path || item.profile_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfiguration.ORIGINAL_IMAGE(
                    item.poster_path || item.backdrop_path || item.profile_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {(item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))) || (
                  <span className="genres__item">
                    {item.known_for_department}
                  </span>
                )}
              </div>
              <p className="overview">{item.overview || item.biography}</p>
              <OutlineButton onClick= {addToCollection}>Add to Collection</OutlineButton>

              {
              
              category !== "person" ? (
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>) : null
}
            </div>
          </div>

          {
             category !== "person" ? (
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieDirectory
                category={category}
                type="similar"
                id={item.id}
              />
            </div>
          </div>) : null
}
        </>
      )}
    </>
  );
};

export default Detail;
