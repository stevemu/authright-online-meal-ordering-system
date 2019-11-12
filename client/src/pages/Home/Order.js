import React from "react";

import { DropdownType, DropdownButton, Dropdown } from "react-bootstrap";

// presentational
export default class Order extends React.Component {
  render() {
    const orderItems = this.props.orderItems;
    const items = [];

    orderItems.forEach((element, index) => {
      items.push(
        <div key={element.itemId}>
          <p>
            <DropdownType
              size="lg"
              title="Drop small"
              id={`dropdown-button-drop-${idx}`}
              key={idx}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>{element.name} {element.quantity} {"$"}{element.price}
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
