import React from 'react';
import styled from 'styled-components';

export const GTKOrderItemDiv = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding-top: 17px;
  padding-right: 16px;
  width: 33.33%;
`;

export const GTKOrderItemImage = styled.div`
  background-size: cover;
  height: 176px;
  width: 100%;
  position: relative;
`;

export const GTKOrderItemText = styled.span`
  font: 24px/24px 'Calibre-Medium';
  letter-spacing: 0.004em;
  color: white;
  margin: 16px;
  max-height: 72px;
  max-width: calc(100% - 32px);
  overflow: hidden;
  bottom: 0;
  position: absolute;
`;

const GTKOrderItem = (props) => {
  const { item } = props;

  const orderDiv = (
    <GTKOrderItemDiv>
      <GTKOrderItemImage style={{ backgroundImage: `url(${item.icon})` }}>
        <GTKOrderItemText>{item.name}</GTKOrderItemText>
      </GTKOrderItemImage>
    </GTKOrderItemDiv>
  );

  return orderDiv;
};

export default GTKOrderItem;
