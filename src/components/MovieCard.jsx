import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <img src={ movie.imagePath } alt="imagemdofilme" />
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};

export default MovieCard;
