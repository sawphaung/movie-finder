import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MoviesContext";
import MoviesLists from "./MoviesLists";
import Pagination from "react-js-pagination";

import Slider from "react-slick";

export default function Home() {
  const moviesContext = useContext(MovieContext);
  const { popular_movies, total_pages } = moviesContext;
  const [pages, setPages] = useState(1);
  const movieSlideArray = popular_movies.slice(0, 4);

  const handlePageNumber = (pageNumber) => {
    moviesContext.popularMovies(pageNumber);
    setPages(pageNumber);
  };

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
  };

  return (
    <div>
      <div className="hero">
        <Slider {...settings}>
          {movieSlideArray.map((heroMovie) => (
            <div key={heroMovie.title} className="hero_carousel">
              <div
                className="hero_carousel_items"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w1280/${heroMovie.backdrop_path}) center`,
                }}
              >
                <div className="hero_carousel_items_contents">
                  <h1 className="title">
                    {heroMovie.title}
                    <span>{heroMovie.vote_average}</span>
                  </h1>
                  <p className="overview">{heroMovie.overview}</p>
                  <Link to={`/movies/${heroMovie.id}`} className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="heading-popular">
        <h2>What's Popular</h2>
      </div>

      <div className="movies-lists">
        {popular_movies.map((movie) => (
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
