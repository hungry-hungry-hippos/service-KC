import React from 'react';
import Helpers from '../../utils/helpers';
import ReviewItem from './reviewItem';

const ReviewList = (props) => {
  const { overall, reviews } = props;

  let reviewList = '';
  if (reviews && reviews.length) {
    reviewList = (
      <div id="ReviewList">
        <h3>Google Reviews</h3>
        <div>{overall}</div>
        {reviews.map(review => (
          <ReviewItem review={review} key={Helpers.getKey()} />
        ))}
      </div>
    );
  }

  return reviewList;
};

export default ReviewList;
