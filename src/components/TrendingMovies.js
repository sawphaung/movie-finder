import React, { useContext } from 'react';
import MoviesLists from './MoviesLists';

import MovieContext from '../context/MoviesContext';

function TrendingMovies() {
  const moviesContext = useContext(MovieContext);
  const { trending_movies } = moviesContext;
  //   console.log(moviesContext);

  return (
    <div>
      <h1 className='heading'>Trending Movies </h1>

      <div className='movies-lists'>
        {trending_movies.map(movie => (
          <MoviesLists key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;
