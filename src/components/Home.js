import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/MoviesContext';

export default function Home() {
  const moviesContext = useContext(MovieContext);
  const { popular_movies } = moviesContext;
  const heroMovie = popular_movies[0];

  console.log(heroMovie);

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${heroMovie &&
      heroMovie.backdrop_path}) `
  };

  return (
    <div className='hero' style={backgroundImage}>
      <div className='hero_contents'>
        <div>
          {heroMovie && (
            <div>
              <h1 className='title'>
                {heroMovie.title}
                <span>{heroMovie.vote_average}</span>
              </h1>
              <p className='overview'>{heroMovie.overview}</p>
              <Link to={`/movies/${heroMovie.id}`} className='button'>
                Learn More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
