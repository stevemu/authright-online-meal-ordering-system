import React from 'react';

import { Button } from 'react-bootstrap';

// presentational
export default class Order extends React.Component {
  
  render() {
    const orderItems = this.props.orderItems;
    const items = [];

    orderItems.forEach((element, index) => {
      items.push(
        <div key={element.itemId}>
          <p>
            {element.name} {' '} {element.quantity} {' '} {'$'}{element.price}
          </p>
        </div>
      );
    });

    return (
      <div>
        <h1>Order Summary</h1>
        {items}
      </div>
    );
  }
}
