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
          {/* <Container> */}
          <Row>
            <Col xs={8} md={6}>
              <Restaurant />
              <MenuList />
            </Col>
            <Col xs={6} md={4}>
              <Order />
            </Col>
          </Row>
          {/* </Container> */}
        </div>
      </Fragment>
    );
  }
}
