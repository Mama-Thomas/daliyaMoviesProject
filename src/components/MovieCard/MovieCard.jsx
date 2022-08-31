import React from 'react';

import './MovieCard.scss';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import { category } from '../../api/tmdbApi';
import apiConfiguration from '../../api/apiConfiguration';

const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfiguration.ORIGINAL_IMAGE(item.poster_path || item.backdrop_path || item.profile_path);

  return (
   <Link to={link}>
        <div className="movie-card " style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <i>Watch</i>
            </Button>
        </div>
        <h3>{item.title || item.name}</h3>
   </Link>
  );
}

export default MovieCard;