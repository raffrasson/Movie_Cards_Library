import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => <div key={ movie.title }>{ movie }</div>);
  }
}

MovieCard.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieCard;
