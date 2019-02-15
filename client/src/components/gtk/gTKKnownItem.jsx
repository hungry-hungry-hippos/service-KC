import React from 'react';

const GTKKnownItem = (props) => {
  const { item } = props;

  const knownItemDiv = (
    <div className="GTKKnownItem">
      <img src={item.icon} alt={item.name} />
      <div className="GTKKnownItemText">{item.name}</div>
    </div>
  );

  return knownItemDiv;
};

export default GTKKnownItem;
