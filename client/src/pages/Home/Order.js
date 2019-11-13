import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";
import GenerateDropdownItem from '../../components/GenerateDropdownItem';

// presentational
export default class Order extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectQuantityChange = this.handleSelectQuantityChange.bind(this);
  }

  // A method to update the item price based on its quantity 
  updateItemPrice(price, quantity) {
    return (price*quantity).toFixed(2);
  }

  handleSelectQuantityChange(quantity, e, itemId) {
    // sent back the updated quantity to API

    // update the quantity in the data
    // console.log(e.target.parentNode.parentNode.parentNode.parentNode.key);
    this.props.handleOnSelectQuantity(quantity, itemId);
  }

  render() {
    const orderItems = this.props.orderItems;
    let subtotal = 0;
    const items = [];

    orderItems.forEach((element) => {
      items.push(
        <div key={element.itemId}>
          <p style={{display: "flex"}}>
            <DropdownButton id="dropdown-basic-button" title={element.quantity} size="sm">
              {/* <Dropdown.Item>Remove</Dropdown.Item>
              <Dropdown.Divider /> */}
              <GenerateDropdownItem id={element.itemId} onSelect={this.handleSelectQuantityChange} />
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
