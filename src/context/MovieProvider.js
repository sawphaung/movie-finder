import React, { useReducer, useEffect } from "react";
import axios from "axios";
import MoviesContext from "./MoviesContext";
import MoviesReducer from "./MoviesReducer";

const MovieProvider = (props) => {
  const API_KEY = "0429b20a4ae03f613cc8a1c247b9b375";
  const BASE_URL = "https://api.themoviedb.org/3/";

  // Initial State
  const initialState = {
    popular_movies: [],
    trending_movies: [],
    upcoming_movies: [],
  };

  // React UseReducer
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Fetching Popular Movies
  const popularMovies = async (pages) => {
    const res = await axios.get(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${pages}`
    );

    dispatch({
      type: "total_pages",
      payload: res.data.total_pages,
    });

    dispatch({
      type: "popular_movies",
      payload: res.data.results,
    });
  };

  // Fetching Trending Movies
  const trendingMovies = async (pages) => {
    const res = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );

    dispatch({
      type: "trending_movies",
      payload: res.data.results,
    });
  };

  // Fetching Upcoming Movies
  const upcomingMovies = async (pages) => {
    const res = await axios.get(
      `${BASE_URL}movie/upcoming?api_key=${API_KEY}&page=${pages}`
    );

    dispatch({
      type: "upcoming_movies",
      payload: res.data.results,
    });
  };

  // UseEffect
  useEffect(() => {
    popularMovies();
    trendingMovies();
    upcomingMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        popular_movies: state.popular_movies,
        trending_movies: state.trending_movies,
        upcoming_movies: state.upcoming_movies,
        total_pages: state.total_pages,
        popularMovies,
        upcomingMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;
