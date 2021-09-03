import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }
}

MovieList.propTypes = {
  movies: propTypes.array.isRequired,
};

export default MovieList;
