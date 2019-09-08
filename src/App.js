import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
import TrendingMovies from './components/TrendingMovies';
import UpComingMovies from './components/UpComingMovies';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/popularmovies' component={PopularMovies} />
        <Route exact path='/trendingmovies' component={TrendingMovies} />
        <Route exact path='/upcomingmovies' component={UpComingMovies} />
      </Switch>
    </Router>
  );
}

export default App;
