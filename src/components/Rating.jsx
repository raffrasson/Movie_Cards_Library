import React from 'react';
import propTypes from 'prop-types';
import '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
