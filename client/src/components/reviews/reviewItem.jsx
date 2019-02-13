import React from 'react';

const ReviewItem = (props) => {
  const { review } = props;

  const reviewDiv = (
    <div name="ReviewItem">
      <img src={review.image} alt={review.name} style={{ width: '200px' }} />
      <h3>{review.name}</h3>
      <h4>{review.date}</h4>
      <p>
        <span>{review.stars}</span>
        {` ${review.description}`}
      </p>
    </div>
  );

  return reviewDiv;
};

export default ReviewItem;
