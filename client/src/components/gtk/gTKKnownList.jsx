import React from 'react';
import Helpers from '../../utils/helpers';
import GTKKnownItem from './gTKKnownItem';

const GTKKnownList = (props) => {
  const { knownFor } = props;

  let knownList = '';
  if (knownFor && knownFor.length) {
    knownList = (
      <div id="GTKKnownList">
        <div className="SectionHeader GTKHeader">Known For</div>
        {knownFor.map(item => (
          <GTKKnownItem item={item} key={Helpers.getKey()} />
        ))}
      </div>
    );
  }

  return knownList;
};

export default GTKKnownList;
