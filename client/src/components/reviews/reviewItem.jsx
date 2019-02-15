import React from 'react';
import StarRating from './starRating';

const ReviewItem = (props) => {
  const { review } = props;

  const reviewDiv = (
    <div className="ReviewItem">
      <div className="ReviewPhoto">
        <a href={`/${review.restaurantId}`}>
          <img src={review.image} alt={review.name} />
        </a>
      </div>
      <div className="ReviewContent">
        <div className="ReviewName">{review.name}</div>
        <div className="ReviewDate">{review.date}</div>
        <div className="Review">
          <StarRating stars={review.stars} />
          <span className="ReviewText">{` ${review.description}`}</span>
        </div>
      </div>
    </div>
  );

  return reviewDiv;
};

export default ReviewItem;
