import React from 'react'
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/Button/Button';
import MovieDirectory from '../components/MovieDirectory/MovieDirectory';
import MediaSlider from '../components/Slider/MediaSlider';

import { category, movieType, tvType } from '../api/tmdbApi';
const Homepage = () => {
  return (
    <>
      <MediaSlider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Popular Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieDirectory category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieDirectory
            category={category.movie}
            type={movieType.top_rated}
          />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Popular TV Shows</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieDirectory category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV Shows</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieDirectory
            category={category.movie}
            type={movieType.top_rated}
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;