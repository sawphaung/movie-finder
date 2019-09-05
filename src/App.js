import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const API_KEY = '0429b20a4ae03f613cc8a1c247b9b375';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );
      setMovies(result.data.results);
      console.log(result.data.results);
    };

    movieData();
  }, []);

  return (
    <div>
      <h1 className='heading'>Popular Movies </h1>

      <div className='App'>
        {movies.map(movie => (
          <div key={movie.id} className='movie'>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
