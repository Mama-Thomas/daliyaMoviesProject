import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfiguration from "../../api/apiConfiguration";

import "./Detail.scss";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

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
            <div className="movie-content__info"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
