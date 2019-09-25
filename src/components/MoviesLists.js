import React from 'react';
import { Link } from 'react-router-dom';

const MoviesLists = ({ movie }) => {
  return (
    <div className='movie'>
      <Link to={`/movies/${movie.id}`}>
        <div className='movie_container'>
          <div className='movie_container_image'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=''
            />
          </div>
          <div className='movie_container_contents'>
            <h1 className='movie_heading'>{movie.title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesLists;
