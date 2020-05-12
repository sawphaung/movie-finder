import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = ({ match }) => {
  const API_KEY = "0429b20a4ae03f613cc8a1c247b9b375";
  const movie_id = match.params.id;

  const [movieData, setMovieData] = useState({ details: [] });

  useEffect(() => {
    const movieFetchData = async () => {
      const movieDetails = await axios(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );

      setMovieData({ details: movieDetails.data });
    };

    movieFetchData();
  }, [movie_id]);

  const {
    title,
    overview,
    genres,
    poster_path,
    runtime,
    status,
  } = movieData.details;

  return (
    <div className="movieDetails">
      <div className="movieDetails_poster">
        {poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        )}
      </div>

      <div className="movieDetails_contents">
        <h1 className="movieDetails_contents_title">
          {title} <span>{status}</span>
        </h1>
        <div className="movieDetails_contents_genre">
          {genres &&
            genres.map((genre) => <span key={genre.id}> {genre.name} </span>)}
        </div>
        <p className="movieDetails_contents_runtime">
          Runtime: {runtime} minutes
        </p>

        <p class="overview-heading">overview</p>
        <p className="movieDetails_contents_overview">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
