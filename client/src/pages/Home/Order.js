import React from "react";

import { Button, DropdownButton, Dropdown } from "react-bootstrap";

// presentational
export default class Order extends React.Component {
  render() {
    const orderItems = this.props.orderItems;
    const items = [];

    orderItems.forEach((element, index) => {
      items.push(
        <div key={element.itemId}>
          <p>
            <DropdownButton id="dropdown-basic-button" title="">
              <Dropdown.Item href="#/1">1</Dropdown.Item>
              <Dropdown.Item href="#/2">2</Dropdown.Item>
              <Dropdown.Item href="#/...">...</Dropdown.Item>
            </DropdownButton>{element.name} {element.quantity} {"$"}{element.price}
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
