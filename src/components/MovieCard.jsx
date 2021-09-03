import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>{movies}</h1>
    );
  }
}

MovieCard.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieCard;
