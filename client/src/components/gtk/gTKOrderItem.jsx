import React from 'react';

const GTKOrderItem = (props) => {
  const { item } = props;

  const orderDiv = (
    <div className="GTKOrderItem">
      <div className="GTKOrderItemImage" style={{ backgroundImage: `url(${item.icon})` }}>
        <span className="GTKOrderItemText">{item.name}</span>
      </div>
    </div>
  );

  return orderDiv;
};

export default GTKOrderItem;
