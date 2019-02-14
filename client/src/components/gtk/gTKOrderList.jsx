import React from 'react';
import Helpers from '../../utils/helpers';
import GTKOrderItem from './gTKOrderItem';

const GTKOrderList = (props) => {
  const { whatToOrder } = props;

  let orderList = '';
  if (whatToOrder && whatToOrder.length) {
    orderList = (
      <div id="GTKOrderList">
        <h3 className="SectionHeader GTKHeader">What To Order</h3>
        {whatToOrder
          .map(item => (
            <GTKOrderItem item={item} key={Helpers.getKey()} />
          ))
        }
      </div>
    );
  }

  return orderList;
};

export default GTKOrderList;
