import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
import TrendingMovies from './components/TrendingMovies';
import UpComingMovies from './components/UpComingMovies';
import MovieDetails from './components/MovieDetails';
import Testing from './components/Testing';

import MovieProvider from './context/MovieProvider';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/popularmovies' component={PopularMovies} />
          <Route exact path='/trendingmovies' component={TrendingMovies} />
          <Route exact path='/upcomingmovies' component={UpComingMovies} />
          <Route path='/movies/:id' component={MovieDetails} />

          <Route exact path='/testing' component={Testing} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
