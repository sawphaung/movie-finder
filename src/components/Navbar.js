import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/popularmovies'>Popular</Link>
        </li>

        <li>
          <Link to='/upcomingmovies'>Upcoming</Link>
        </li>

        <li>
          <Link to='/trendingmovies'>Trending</Link>
        </li>
      </ul>
    </nav>
  );
}
