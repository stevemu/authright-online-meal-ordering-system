import React, { Component } from "react";
import { DropdownButton, Container, Col, Row } from "react-bootstrap";
import GenerateDropdownItem from "../../../components/GenerateDropdownItem";
import { getMenu, postOrder } from "../../../utils";

class OrderSummary extends Component {
  constructor(props) {
    super(props);

    this.handleSelectQuantityChange = this.handleSelectQuantityChange.bind(
      this
    );
    this.getSubtotal = this.getSubtotal.bind(this);
  }

  // A method to update the item price based on its quantity
  updateItemPrice(price, quantity) {
    return (price * quantity).toFixed(2);
  }

  handleSelectQuantityChange(quantity, e, itemId) {
    this.props.handleOnSelectQuantity(quantity, itemId);
  }

  // calculate the subtotal price here
  getSubtotal(items) {
    let total = 0;
    items.forEach(element => {
      total += element.price * element.quantity;
    });
    return total.toFixed(2);
  }

  render() {
    const orderItems = this.props.orderItems;
    const items = []; // to hold JSX

    orderItems.forEach(element => {
      items.push(
        <div key={element.itemId}>
          <div style={{ display: "flex", marginBottom: "2%" }}>
            <Container>
              <Row>
                <Col sm={2}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={element.quantity}
                    size="sm"
                  >
                    <GenerateDropdownItem
                      id={element.itemId}
                      onSelect={this.handleSelectQuantityChange}
                    />
                  </DropdownButton>
                </Col>
                <Col sm={8}>{element.name}</Col>
                <Col sm={2}>
                  {"$"}
                  {this.updateItemPrice(element.price, element.quantity)}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Order Summary</h1>
        <h5>
          Subtotal {"$"}
          {this.getSubtotal(orderItems)}
        </h5>
        {items}
      </div>
    );
  }
}


export default OrderSummary;