import React, { useEffect, useRef, useState } from "react";

// import SwiperCore, { Autoplay, Virtual } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

import Button, { OutlineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

import apiConfiguration from "../../api/apiConfiguration";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import { useNavigate } from "react-router-dom";
import "./MediaSlider.scss";
const MediaSlider = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };

      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {params});
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  // const slides = Array.from({ length: movieItems.length }).map(
  //   (el,index) =>  `Slide ${index +1}`
  // );

  // console.log("THIS THIS ")
  // console.log(useState());
  // console.log(setMovieItems.length);
  // movieItems.map((item) => console.log(item));

  return (
    <div className="hero-slide">
      <Swiper
        // modules={[Virtual]}
        modules={[Autoplay]}
        // autoplay={{delay:3000}}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // virtual
      >
        {movieItems.map((item, i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => (
            <MediaSlideItem
              item={item}
              className={`${isActive ? "active" : ""}`}
            />
          )}
        </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

const MediaSlideItem = (props) => {
  const navigate = useNavigate();

  const item = props.item;

  const backgroundImage = apiConfiguration.ORIGINAL_IMAGE(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }
    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>

          <div className="btns">
            <Button onClick={() => navigate('/movie/' + item.id)}>
            {/* <Button onClick={() =>console.log("BUTTON CLICKED")}> */}
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfiguration.ORIGINAL_IMAGE(item.poster_path)} alt="" />
          {/* <img src={apiConfiguration.W500_IMAGE(item.poster_path)} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

// https://image.tmdb.org/t/p/w500/sqLowacltbZLoCa4KYye64RvvdQ.jpg
const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default MediaSlider;
