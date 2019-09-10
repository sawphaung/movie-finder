export default (state, action) => {
  switch (action.type) {
    case 'popular_movies':
      return {
        ...state,
        popular_movies: action.payload
      };

    case 'total_pages':
      return {
        ...state,
        total_pages: action.payload
      };

    case 'trending_movie':
      return {
        ...state,
        trending_movies: action.payload
      };

    default:
      return state;
  }
};
