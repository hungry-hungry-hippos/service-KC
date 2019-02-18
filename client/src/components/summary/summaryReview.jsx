import React from 'react';
import Scores from './summaryScoreList';

const ZReview = (props) => {
  const { description, scores } = props;

  let reviewDiv = '';

  if (description || scores) {
    reviewDiv = (
      <div id="summaryZReview">
        <div id="summaryDivider">
          <img src="https://s3-us-west-1.amazonaws.com/hrsf111hipposkc/z-logo-icon-red.svg" alt="logo" id="summaryLogo" />
        </div>
        <div className="SectionHeader">The Zagat Review</div>
        <Scores scores={scores} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }

  return reviewDiv;
};

export default ZReview;
