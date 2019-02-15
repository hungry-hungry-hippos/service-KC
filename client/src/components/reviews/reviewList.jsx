import React from 'react';
import Helpers from '../../utils/helpers';
import ReviewItem from './reviewItem';

const ReviewList = (props) => {
  const { overall, reviews } = props;

  let reviewList = '';
  if (reviews && reviews.length) {
    reviewList = (
      <div id="reviewList">
        <div className="SectionHeader ReviewsHeader">
          <div id="reviewTitle">Google Reviews</div>
          <div id="overallReviewScore">
            {`${overall.toFixed(1)} `}
            <span className="starRating">★★★★★</span>
          </div>
        </div>
        <div id="reviewItems">
          {reviews.map(review => (
            <ReviewItem review={review} key={Helpers.getKey()} />
          ))}
        </div>
      </div>
    );
  }

  return reviewList;
};

export default ReviewList;
