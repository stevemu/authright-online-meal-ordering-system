import React from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";
import GenerateDropdownItem from '../../components/GenerateDropdownItem';
import { number } from "prop-types";

// presentational
export default class Order extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectQuantityChange = this.handleSelectQuantityChange.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
  }

  handleSubtotal(itemPrice) {
    this.setState({
      subtotal: this.state.subtotal + itemPrice
    });
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

  getSubtotal(items) {
    return items.reduce((acc, cur) => acc+cur).toFixed(2);
  } 

  render() {
    const orderItems = this.props.orderItems;
    const items = [];
    let subtotal = 0;

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
      // subtotal += element.price;
    });

    return (
      <div>
        <h1>Order Summary</h1>
        <h5>Subtotal {"$"}{this.getSubtotal(orderItems)}</h5>
        {items}
      </div>
    );
  }
}
