import React from 'react';

const ScoreElement = (props) => {
  const { scoreKey, value } = props;

  const scoreDiv = (
    <p id={`score-${scoreKey}`}>
      {`${scoreKey} : ${value}`}
    </p>
  );

  return scoreDiv;
};

export default ScoreElement;
