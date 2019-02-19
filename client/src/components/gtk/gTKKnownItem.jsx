import React from 'react';
import styled from 'styled-components';

export const GTKKnownItemDiv = styled.div`
  display: inline-block;
  width: 96px;
  margin: 12px 16px 0;

  img {
    display: block;
    width: 100%;
    height: 72px;
  }
`;

const GTKKnownItem = (props) => {
  const { item } = props;

  const knownItemDiv = (
    <GTKKnownItemDiv>
      <img src={item.icon} alt={item.name} />
      <div className="GTKKnownItemText">{item.name}</div>
    </GTKKnownItemDiv>
  );

  return knownItemDiv;
};

export default GTKKnownItem;
