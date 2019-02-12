import React from 'react';

const Scores = (props) => {
  const { scores } = props;

  let scoresDiv = '';
  if (scores) {
    scoresDiv = (
      <div id="summaryScores">
        {
          Object.keys(scores)
            .map(key => (
              <p key={key}>
                {`${key} : ${scores[key]}`}
              </p>
            ))
        }
      </div>
    );
  }

  return scoresDiv;
};

export default Scores;
