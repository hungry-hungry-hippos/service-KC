import React from 'react';

const ScoreItem = (props) => {
  const { scoreKey, value } = props;

  const scoreDiv = (
    <p id={`score-${scoreKey}`}>
      {`${scoreKey} : ${value}`}
    </p>
  );

  return scoreDiv;
};

export default ScoreItem;
