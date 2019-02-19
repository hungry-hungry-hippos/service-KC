import React from 'react';
import styled from 'styled-components';
import { GTKHeader } from '../sharedStyledComponents';

export const GTKInsiderTipContent = styled.div`
  text-align: center;
`;

export const TipTopDivider = styled.div`
  width: 30%;
  border: 1px #d0d2d3 solid;
  margin: 25px auto 0 auto;
  text-align: center;
`;

export const TipText = styled.div`
  font: 22px/32px 'Calibre-Regular';
  letter-spacing: 0.004em;
  width: 75%;
  margin-top: 23px;
  display: inline-block;
`;

export const TipBottomDivider = styled.div`
  width: 30%;
  border: 1px #d0d2d3 solid;
  margin: 23px auto 0 auto;
  text-align: center;
`;

const GTKInsiderTip = (props) => {
  const { tip } = props;

  let tipDiv = '';
  if (tip) {
    tipDiv = (
      <div id="GTKInsiderTip">
        <GTKHeader>Insider Tip</GTKHeader>
        <GTKInsiderTipContent>
          <TipTopDivider />
          <TipText>{tip}</TipText>
          <TipBottomDivider />
        </GTKInsiderTipContent>
      </div>
    );
  }

  return tipDiv;
};

export default GTKInsiderTip;
