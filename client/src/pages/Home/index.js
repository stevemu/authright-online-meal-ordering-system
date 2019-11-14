import React from "react";
import { connect } from "react-redux";

import { updateOrder } from "../../Redux/actions/orderAction";
import { updateMenu } from "../../Redux/actions/menuAction";

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
              <Order
                updateOrder={this.props.updateOrder}
                order={this.props.order}
                menu={this.props.menu}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  menu: state.menu
});

const mapDispatchToProps = dispatch => ({
  updateOrder: order => dispatch(updateOrder(order)),
  updateMenu: menu => dispatch(updateMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
