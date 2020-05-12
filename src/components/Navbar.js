import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <label for="nav-toggle" class="toggle">
        <span></span>
      </label>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popularmovies">Popular</Link>
        </li>

        <li>
          <Link to="/upcomingmovies">Upcoming</Link>
        </li>

        <li>
          <Link to="/trendingmovies">Trending</Link>
        </li>
      </ul>

      <div className="movie-db">
        <a href="https://www.themoviedb.org">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDb)"
          ></img>
        </a>
      </div>
    </nav>
  );
}
