import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StarRatingDiv = styled.div`
  letter-spacing: 0.14em;
  display: inline-block;
  height: 20px;
`;

export const StarContainer = styled.div`
  position: relative;
`;

export const StarBackground = styled.div`
  opacity: 0.2;
`;

// Update this to take stars as props and calculate width internally
export const StarFilled = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
`;

const StarRating = (props) => {
  let { stars } = props;
  stars = Math.floor(parseFloat(stars) * 2 * 10);

  return (
    <StarRatingDiv>
      <StarContainer>
        <StarBackground>★★★★★</StarBackground>
        <StarFilled style={{ width: `calc(${stars}% - 0.07em)` }}>★★★★★</StarFilled>
      </StarContainer>
    </StarRatingDiv>
  );
};

StarRating.propTypes = {
  stars: PropTypes.string.isRequired,
};

export default StarRating;
