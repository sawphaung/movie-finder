import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const MovieDetails = ({ match }) => {
  const API_KEY = '0429b20a4ae03f613cc8a1c247b9b375';
  const movie_id = match.params.id;

  const [movieData, setMovieData] = useState({ details: [], movie: [] });

  useEffect(() => {
    const movieFetchData = async () => {
      const movieDetails = await axios(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const movieTrailer = await axios(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
      );
      setMovieData({ details: movieDetails.data, movie: movieTrailer.data });
    };

    movieFetchData();
  }, [movie_id]);

  //   console.log(movieData.details, movieData.movie);

  const { title, overview, genres, poster_path } = movieData.details;
  const { results } = movieData.movie;

  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        {genres &&
          genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
      </div>

      <div>
        {poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
        )}
      </div>

      <div>
        {results &&
          results.map(movie => (
            <div key={movie.id}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie.key}`}
                controls
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieDetails;
