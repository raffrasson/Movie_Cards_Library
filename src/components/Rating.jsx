import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

export default Rating;
