import React from 'react';
import { Link } from 'react-router-dom';

const MoviesLists = ({ movie }) => {
  return (
    <div className='movie'>
      <Link to={`/movies/${movie.id}`}>
        <h1 className='movie_heading'>{movie.title}</h1>
        <div className='movie_container'>
          <div className='movie_container_image'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=''
            />
          </div>
          <div className='movie_container_contents'>
            <p>
              Overview: <span>{movie.overview}</span>
            </p>
            <p>Release Date: {movie.release_date}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Rating: {movie.vote_average} / 10</p>
            <p>Vote Count: {movie.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesLists;
