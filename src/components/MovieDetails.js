import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ReactPlayer from 'react-player';

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

  const { title, overview, genres, poster_path, runtime } = movieData.details;

  //   const { results } = movieData.movie;

  return (
    <div>
      <div className='movieDetails'>
        <div className='movieDetails_poster'>
          {poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
          )}
        </div>
        <div className='movieDetails_contents'>
          <h1 className='movieDetails_contents_title'>{title}</h1>
          <div className='movieDetails_contents_genre'>
            {genres &&
              genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
          </div>
          <p className='movieDetails_contents_overview'>{overview}</p>
          <p className='movieDetails_contents_overview'>
            Runtime: {runtime} minutes
          </p>
        </div>
      </div>

      {/* <div className='movieVideo-wrapper'>
        {results &&
          results.map(movie => (
            <div key={movie.id} className='video'>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie.key}`}
                controls
                width='30vw'
              />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default MovieDetails;
