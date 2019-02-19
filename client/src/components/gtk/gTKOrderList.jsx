import React from 'react';
import { GTKHeader } from '../sharedStyledComponents';
import Helpers from '../../utils/helpers';
import GTKOrderItem from './gTKOrderItem';

const GTKOrderList = (props) => {
  const { whatToOrder } = props;

  let orderList = '';
  if (whatToOrder && whatToOrder.length) {
    orderList = (
      <div id="GTKOrderList">
        <GTKHeader>What To Order</GTKHeader>
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
