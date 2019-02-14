import React from 'react';

const GTKOrderItem = (props) => {
  const { item } = props;

  const orderDiv = (
    <div className="GTKOrderItem">
      <img src={item.icon} alt={item.name} style={{ width: '200px' }} />
      <p>{item.name}</p>
    </div>
  );

  return orderDiv;
};

export default GTKOrderItem;
