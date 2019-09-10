import React, { useContext } from 'react';
import MoviesLists from './MoviesLists';

// import Pagination from 'react-js-pagination';

import MovieContext from '../context/MoviesContext';

const Testing = () => {
  const moviesContext = useContext(MovieContext);
  const { trending_movies } = moviesContext;

  //   const [pages, setPages] = useState(1);

  //   const handlePageNumber = pageNumber => {
  //     setPages(pageNumber);
  //   };

  return (
    <div>
      <h1 className='heading'>Popular Movies</h1>

      {/* <Pagination
        activePage={pages}
        pageRangeDisplayed={5}
        totalItemsCount={totalPages}
        onChange={handlePageNumber}
      /> */}

      <div className='movies-lists'>
        {trending_movies.map(movie => (
          <MoviesLists key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Testing;
