import React from "react";
import { connect } from "react-redux";

import { updateOrder } from "../../Redux/actions/orderAction";

import MenuList from "./MenuList/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";

import { Container, Row, Col } from "react-bootstrap";
import Order from "./Order";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}


const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = dispatch => ({
  updateOrder: order => dispatch(updateOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);