import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Pagination from 'react-js-pagination';

function App() {
  const API_KEY = '0429b20a4ae03f613cc8a1c247b9b375';

  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const movieData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pages}`
      );
      setMovies(result.data.results);
      setTotalPages(result.data.total_pages);
      console.log(result.data);
    };

    movieData();
  }, [pages]);

  const handlePageNumber = pageNumber => {
    setPages(pageNumber);
  };

  return (
    <div>
      <h1 className='heading'>Popular Movies </h1>
      <Pagination
        activePage={pages}
        itemsCountPerPage={20}
        pageRangeDisplayed={5}
        totalItemsCount={totalPages}
        onChange={handlePageNumber}
      />
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

      <Pagination
        activePage={pages}
        itemsCountPerPage={20}
        pageRangeDisplayed={5}
        totalItemsCount={totalPages}
        onChange={handlePageNumber}
      />
    </div>
  );
}

export default App;
