import React from 'react';

const ScoreItem = (props) => {
  const { scoreKey, value } = props;

  const scoreDiv = (
    <div className="scoreDiv">
      <div className="scoreRating">
        {value.toFixed(1)}
      </div>
      <span className="scoreLabel">{scoreKey}</span>
    </div>
  );

  return scoreDiv;
};

export default ScoreItem;
