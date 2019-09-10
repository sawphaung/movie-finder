import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import MoviesContext from './MoviesContext';
import MoviesReducer from './MoviesReducer';

const MovieProvider = props => {
  const API_KEY = '0429b20a4ae03f613cc8a1c247b9b375';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  const initialState = {
    popular_movies: [],
    trending_movies: []
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Fetching Popular Movies
  const popularMovies = async () => {
    const res = await axios(`${BASE_URL}movie/popular?api_key=${API_KEY}`);

    dispatch({
      type: 'popular_movies',
      payload: res.data.results
    });
  };

  // Fetching Trending Movies
  const trendingMovies = async () => {
    const res = await axios(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);

    dispatch({
      type: 'trending_movie',
      payload: res.data.results
    });
  };

  useEffect(() => {
    popularMovies();
    trendingMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        popular_movies: state.popular_movies,
        trending_movies: state.trending_movies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;
