import React from 'react';

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
          {/* <span>{review.stars}</span> */}
          <span className="starRating">★★★★★</span>
          {` ${review.description}`}
        </div>
      </div>
    </div>
  );

  return reviewDiv;
};

export default ReviewItem;
