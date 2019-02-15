import React from 'react';
import PropTypes from 'prop-types';

const StarRating = (props) => {
  let { stars } = props;
  stars = Math.floor(parseFloat(stars) * 2 * 10);

  return (
    <div className="StarRating">
      <div className="StarContainer">
        <div className="StarBackground">★★★★★</div>
        <div className="StarFilled" style={{ width: `calc(${stars}% - 0.07em)` }}>★★★★★</div>
      </div>
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.string.isRequired,
};

export default StarRating;
