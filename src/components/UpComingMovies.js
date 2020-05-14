import React, { useState, useContext } from "react";
import Pagination from "react-js-pagination";
import MoviesLists from "./MoviesLists";

import MovieContext from "../context/MoviesContext";

function UpComingMovies() {
  const [pages, setPages] = useState(1);

  const handlePageNumber = (pageNumber) => {
    setPages(pageNumber);
    moviesContext.upcomingMovies(pageNumber);
  };

  const moviesContext = useContext(MovieContext);
  const { upcoming_movies, total_pages } = moviesContext;

  return (
    <div className="bg-color">
      <h1 className="heading">Upcoming Movies </h1>

      <div className="movies-lists">
        {upcoming_movies.map((movie) => (
          <MoviesLists key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        activePage={pages}
        pageRangeDisplayed={5}
        totalItemsCount={total_pages}
        onChange={handlePageNumber}
      />
    </div>
  );
}

export default UpComingMovies;
