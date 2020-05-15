import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = ({ match }) => {
  const API_KEY = "0429b20a4ae03f613cc8a1c247b9b375";
  const movie_id = match.params.id;

  const [movieData, setMovieData] = useState({ details: [] });
  const [castData, setCastData] = useState({ details: [] });

  useEffect(() => {
    const movieFetchData = async () => {
      const movieDetails = await axios(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );

      //   console.log(movieDetails.data);

      setMovieData({
        details: movieDetails.data,
      });
    };

    const castFetchData = async () => {
      const castDetails = await axios(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
      );

      //   console.log(castDetails.data.cast);

      setCastData({
        details: castDetails.data,
      });
    };

    movieFetchData();
    castFetchData();
  }, [movie_id]);

  const {
    title,
    overview,
    genres,
    poster_path,
    runtime,
    status,
    production_companies,
  } = movieData.details;

  const { cast } = castData.details;

  return (
    <div className="movieDetails">
      <div className="movieDetails_poster">
        {poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        )}
      </div>

      <div className="movieDetails_contents">
        <h1 className="movieDetails_contents_title">{title}</h1>

        <p>
          <span>{status}</span> <span>{runtime} Mins</span>
        </p>

        <div className="movieDetails_contents_genre">
          {genres &&
            genres.map((genre) => <span key={genre.id}> {genre.name} </span>)}
        </div>

        <p className="movieDetails_contents_overview">{overview}</p>

        <div className="movieDetails_contents_casts">
          <p className="lead">Movie Casts: </p>

          <div className="casts">
            {cast &&
              cast.map((people) => (
                <div className="cast">
                  <div className="img-wrap">
                    <img
                      src={`https://image.tmdb.org/t/p/w138_and_h175_face/${people.profile_path}`}
                      alt=""
                    />
                  </div>

                  <p className="name" key={people.id}>
                    {people.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="movieDetails_contents_companies">
          <p className="lead">Production Companies:</p>

          <ul>
            {production_companies &&
              production_companies.map((company) => (
                <li key={company.id}> {company.name} </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
