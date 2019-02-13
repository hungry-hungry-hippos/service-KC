import React from 'react';
import ScoreElement from './summaryScore';

const Scores = (props) => {
  const { scores } = props;

  let scoresDiv = '';
  if (scores) {
    scoresDiv = (
      <div id="summaryScores">
        {
          Object.keys(scores)
            .map(scoreKey => (
              <ScoreElement scoreKey={scoreKey} value={scores[scoreKey]} key={scoreKey} />
            ))
        }
      </div>
    );
  }

  return scoresDiv;
};

export default Scores;
