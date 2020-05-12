import React, { useState, useContext } from "react";
import Pagination from "react-js-pagination";
import MoviesLists from "./MoviesLists";

import MovieContext from "../context/MoviesContext";

function TrendingMovies() {
  const moviesContext = useContext(MovieContext);
  const { trending_movies, total_pages } = moviesContext;
  const [pages, setPages] = useState(1);

  const handlePageNumber = (pageNumber) => {
    moviesContext.popularMovies(pageNumber);
    setPages(pageNumber);
  };

  return (
    <div className="bg-color">
      <h1 className="heading">Trending Movies </h1>

      <div className="movies-lists">
        {trending_movies.map((movie) => (
          <MoviesLists key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        activePage={pages}
        itemsCountPerPage={20}
        pageRangeDisplayed={5}
        totalItemsCount={total_pages}
        onChange={handlePageNumber}
      />
    </div>
  );
}

export default TrendingMovies;
