import React, { Component, Fragment } from "react";
import MenuList from "../../components/Menu/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";

import { Container, Row, Col } from "react-bootstrap";
import Order from "./Order";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div>
          <Row>
            <Col xs={7}>
              <Restaurant />
              <MenuList />
            </Col>
            <Col xs={5}>
              <h1>Order summary</h1>
              <Order />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
