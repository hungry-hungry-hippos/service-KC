import React from 'react';
import styled from 'styled-components';

export const ScoreDiv = styled.div`
  display: inline-block;
  width: 130px;
  height: 60px;
  text-align: center;
  border-right: 1px #d0d2d3 solid;

  &:last-child {
    border-right: none;
  }
`;

export const ScoreRating = styled.div`
  font: 36px/44px 'Calibre-Medium';
  letter-spacing: 0.086em;
`;

export const ScoreLabel = styled.span`
  font: 13px/18px 'Calibre-Regular';
  letter-spacing: 0.061em;
  text-transform: uppercase;
`;

const ScoreItem = (props) => {
  const { scoreKey, value } = props;

  const scoreDiv = (
    <ScoreDiv>
      <ScoreRating>
        {value.toFixed(1)}
      </ScoreRating>
      <ScoreLabel>{scoreKey}</ScoreLabel>
    </ScoreDiv>
  );

  return scoreDiv;
};

export default ScoreItem;
