import React from 'react';

// presentational
export default class Order extends React.Component {
  
  render() {
    const orderItems = this.props.orderItems;
    const items = [];

    orderItems.forEach((element, index) => {
      items.push(

        <p key={element.itemId}>
          <li>{element.name}</li>
          <li>{element.quantity}</li>
          <li>{element.price}</li>
        </p>
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
