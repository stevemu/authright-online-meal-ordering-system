import React, { Component, Fragment } from "react";
import MenuList from "../../components/Menu/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";
import { Container, Row, Col } from "react-bootstrap";
import Order from "./Order";

import { getOrder } from "../../utils";

const container = {
  height: "100vh",
  fontFamily: "Open Sans"
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItem: [],
      counter: 0
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // update order item quantity
  handleQuantity(quantity, itemId) {
    this.setState({
      orderItem: this.state.orderItem.map(element =>
        element.itemId === itemId ? { ...element, quantity: quantity } : element
      )
    });
  }

  handleDelete(itemId) {
    // this.setState({
    //   orderItem: this.state.orderItem.filter((element) => element.itemId !== itemId)
    // });
    console.log("Delete!", itemId);
  }

  // pulling
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  async tick() {
    let apiData = await getOrder();
    this.setState({
      orderItem: apiData,
      counter: (this.state.counter += 1)
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div>
          {/* <Container> */}
          <Row>
            <Col xs={8} md={6}>
              <Restaurant />
              <MenuList />
            </Col>
            <Col xs={6} md={4}>
              <Order
                orderItem={this.state.orderItem}
                counter={this.state.counter}
                handleOnSelectQuantity={this.handleQuantity}
                handleOnDelete={this.handleDelete}
              />
            </Col>
          </Row>
          {/* </Container> */}
        </div>
      </Fragment>
    );
  }
}
