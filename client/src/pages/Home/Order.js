import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";

// presentational
export default class Order extends React.Component {

  // A method to update the item price based on its quantity 
  updateItemPrice(price, quantity) {
    return (price*quantity).toFixed(2);
  }

  handleChangeQuantity(e) {
    console.log(e.target.value);
  }

  render() {
    const orderItems = this.props.orderItems;
    let subtotal = 0;
    const items = [];
    let quantity = 0;

    orderItems.forEach((element) => {
      items.push(
        <div key={element.itemId}>
          <p style={{display: "flex"}}>
            <DropdownButton id="dropdown-basic-button" title={element.quantity} size="sm">
              <Dropdown.Item>Remove</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={(e) => this.handleChangeQuantity(e)}>1</Dropdown.Item>
              
            </DropdownButton>
            {element.name} {"$"}{this.updateItemPrice(element.price, element.quantity)}
          </p>
        </div>
      );
      // calculate the subtotal price here
      subtotal += element.price;
    });

    return (
      <div>
        <h1>Order Summary</h1>
        <h5>Subtotal {"$"}{subtotal.toFixed(2)}</h5>
        {items}
      </div>
    );
  }
}
