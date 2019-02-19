import React from 'react';
import styled from 'styled-components';
import ScoreItem from './summaryScoreItem';

export const SummaryScores = styled.div`
  display: inline-block;
  margin-top: 17px;
  padding-bottom: 16px;
  border-bottom: 1px #d0d2d3 solid;
`;

const Scores = (props) => {
  const { scores } = props;

  let scoresDiv = '';
  if (scores) {
    scoresDiv = (
      <SummaryScores id="summaryScores">
        {
          Object.keys(scores)
            .map(scoreKey => (
              <ScoreItem scoreKey={scoreKey} value={scores[scoreKey]} key={scoreKey} />
            ))
        }
      </SummaryScores>
    );
  }

  return scoresDiv;
};

export default Scores;
