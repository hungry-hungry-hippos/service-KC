import React from 'react';
import Scores from './summaryScoreList';

const ZReview = (props) => {
  const { description, scores } = props;

  let reviewDiv = '';

  if (description || scores) {
    reviewDiv = (
      <div id="summaryZReview">
        <div id="summaryDivider">
          <img src="https://zagat.com/assets/img/z-logo-icon-red.svg" alt="logo" id="summaryLogo" />
        </div>
        <h3>The Zagat Review</h3>
        <Scores scores={scores} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }

  return reviewDiv;
};

export default ZReview;
