import React from 'react';

const GTKKnownItem = (props) => {
  const { item } = props;

  const knownItemDiv = (
    <div className="GTKKnownItem">
      <img src={item.icon} alt={item.name} style={{ width: '200px' }} />
      <p>{item.name}</p>
    </div>
  );

  return knownItemDiv;
};

export default GTKKnownItem;
