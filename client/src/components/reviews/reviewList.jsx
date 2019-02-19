import React from 'react';
import styled from 'styled-components';
import { ReviewsHeader } from '../sharedStyledComponents';
import Helpers from '../../utils/helpers';
import ReviewItem from './reviewItem';
import StarRating from './starRating';

export const ReviewTitle = styled.div`
  display: inline-block;
  margin-right: 32px;
`;

export const OverallReviewScore = styled.div`
  display: inline-block;
  color: #101820;
`;

export const ReviewItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewList = (props) => {
  const { overall, reviews } = props;

  let reviewList = '';
  if (reviews && reviews.length) {
    reviewList = (
      <div id="reviewList">
        <ReviewsHeader>
          <ReviewTitle>Google Reviews</ReviewTitle>
          <OverallReviewScore>
            {`${parseFloat(overall).toFixed(1)} `}
            <StarRating stars={overall} />
          </OverallReviewScore>
        </ReviewsHeader>
        <ReviewItems>
          {reviews.map(review => (
            <ReviewItem review={review} key={Helpers.getKey()} />
          ))}
        </ReviewItems>
      </div>
    );
  }

  return reviewList;
};

export default ReviewList;
