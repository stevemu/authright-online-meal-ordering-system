import React from "react";
import { connect } from "react-redux";

import { updateOrder } from "../../Redux/actions/orderAction";
import { updateMenu } from "../../Redux/actions/menuAction";

import MenuList from "./MenuList/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";

import { Container, Row, Col } from "react-bootstrap";
import styles from './index.css.js'
import Order from "./Order";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.nav}>
          <Navigation />
        </div>
        <div style={styles.content}>
          <div style={styles.info}>
            <Restaurant style={styles.restaurant} />
            <MenuList />
          </div>
          <div style={styles.order}>
            <Order
              updateOrder={this.props.updateOrder}
              order={this.props.order}
              menu={this.props.menu} />
          </div>
        </div>
      </div>
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
