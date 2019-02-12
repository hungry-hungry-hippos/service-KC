import React from 'react';
import Scores from './summaryScores';

const ZReview = (props) => {
  const { description, scores } = props;

  let reviewDiv = '';

  if (description || scores) {
    reviewDiv = (
      <div id="summaryZReview">
        <h3>The Zagat Review</h3>
        <Scores scores={scores} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }

  return reviewDiv;
};

export default ZReview;
