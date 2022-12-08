import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-header">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        </div>
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt="imagem do filme" />
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <Rating className="movie-card-rating" rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.objectOf(propTypes.string).isRequired,
};

export default MovieCard;
