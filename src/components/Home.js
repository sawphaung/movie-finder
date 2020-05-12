import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MoviesContext";

import Slider from "react-slick";

export default function Home() {
  const moviesContext = useContext(MovieContext);
  const { popular_movies } = moviesContext;
  const movieSlideArray = popular_movies.slice(0, 4);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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

      <div className="sponser">
        <h2>Data Provided by The Movie DB</h2>
      </div>
    </div>
  );
}
