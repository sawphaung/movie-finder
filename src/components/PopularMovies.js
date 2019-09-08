import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import MoviesLists from './MoviesLists';

function PopularMovies() {
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

      <div className='movies-lists'>
        {movies.map(movie => (
          <MoviesLists key={movie.id} movie={movie} />
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

export default PopularMovies;
