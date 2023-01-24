import React, {useContext} from "react";

import "./MovieCard.scss";

// import { FieldValue } from "firebase";


import { Link } from "react-router-dom";

import Button, { OutlineButton } from "../Button/Button";
import { AuthContext } from "../../components/Auth/Auth";

import { db } from "../../api/firebase-config";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

import { category } from "../../api/tmdbApi";
import apiConfiguration from "../../api/apiConfiguration";


const MovieCard = (props) => {
  const item = props.item;
  
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfiguration.ORIGINAL_IMAGE(
    item.poster_path || item.backdrop_path || item.profile_path
  );

  const { currentUser } = useContext(AuthContext);


  const removeFromCollection = async () => {
    if(currentUser){
    try {
      if (props.category === "movie") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          moviesCol: arrayRemove(`${item.id}`),
        });
        console.log(`${item.id}`)
        console.log("Removed " + category);
      } else if (props.category === "tv") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          TvCol: arrayRemove(`${item.id}`),
        });
        console.log("Removed " + category);
      } else if (props.category === "person") {
        await updateDoc(doc(db, "users", currentUser.uid), {
          PeopleCol: arrayRemove(`${item.id}`),
        });
        console.log("Removed " + category);
      }
    } catch (error) {
      console.log(error);
    }
  } else{
    console.log("User not logged in")
  }
  };

  return (
    <>
      <div className="movie_link">
        <Link to={link} key={item.id}>
          <div
            id={props.id}
            className="movie-card movie-coll"
            // style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={bg} alt={bg} />

            <Button>
              <i>Watch</i>
            </Button>
          </div>
          <h3 className="h3">{item.title || item.name}</h3>
        </Link>
        {console.log(props.id)}
        {props.id === "colItem" ? (
          <OutlineButton onClick={removeFromCollection}>
            <i>Remove</i>
          </OutlineButton>
        ) : null}
      </div>
    </>
  );
  
};

export default MovieCard;
