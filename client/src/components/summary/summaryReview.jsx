import React from 'react';
import styled from 'styled-components';
import { SectionHeaderDiv } from '../sharedStyledComponents';
import Scores from './summaryScoreList';

export const SummaryZReview = styled.div`
  p {
    font: 22px/32px 'Calibre-Regular';
    letter-spacing: 0.004em;
    color: #101820;
    margin-top: 21px;
    margin-bottom: 0;
  }

  p b {
    font-family: 'Calibre-Semibold';
    font-weight: normal;
  }
`;

export const SummaryDivider = styled.div`
  border-top: 1px #656666 solid;
  border-bottom: 1px #656666 solid;
  height: 2px;
  margin: 23px 0 17px;
`;

export const SummaryLogo = styled.img`
  border: 2px white solid;
  border-radius: 16px;
  height: 32px;
  margin-top: -16px;
  margin-left: 83.3%;
`;

const ZReview = (props) => {
  const { description, scores } = props;

  let reviewDiv = '';

  if (description || scores) {
    reviewDiv = (
      <SummaryZReview id="summaryZReview">
        <SummaryDivider id="summaryDivider">
          <SummaryLogo src="https://zagat.com/assets/img/z-logo-icon-red.svg" alt="logo" />
        </SummaryDivider>
        <SectionHeaderDiv>The Zagat Review</SectionHeaderDiv>
        <Scores scores={scores} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </SummaryZReview>
    );
  }

  return reviewDiv;
};

export default ZReview;
