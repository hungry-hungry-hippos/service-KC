import React from 'react';

const ScoreItem = (props) => {
  const { scoreKey, value } = props;

  const scoreDiv = (
    <div className="ScoreDiv">
      <div className="ScoreRating">
        {value.toFixed(1)}
      </div>
      <span className="ScoreLabel">{scoreKey}</span>
    </div>
  );

  return scoreDiv;
};

export default ScoreItem;
