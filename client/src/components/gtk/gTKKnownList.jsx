import React from 'react';
import styled from 'styled-components';
import { GTKHeader } from '../sharedStyledComponents';
import Helpers from '../../utils/helpers';
import GTKKnownItem from './gTKKnownItem';

export const GTKKnownItems = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #101820;
  font: 15px/20px 'Calibre-Regular';
  letter-spacing: 0.013em;
`;

const GTKKnownList = (props) => {
  const { knownFor } = props;

  let knownList = '';
  if (knownFor && knownFor.length) {
    knownList = (
      <div id="GTKKnownList">
        <GTKHeader>Known For</GTKHeader>
        <GTKKnownItems>
          {knownFor.map(item => (
            <GTKKnownItem item={item} key={Helpers.getKey()} />
          ))}
        </GTKKnownItems>
      </div>
    );
  }

  return knownList;
};

export default GTKKnownList;
