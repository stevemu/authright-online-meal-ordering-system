import React from "react";
import { connect } from "react-redux";

import { updateOrder } from "../../Redux/actions/orderAction";
import { updateMenu } from "../../Redux/actions/menuAction";

import Order from "./Order";
import styles from './index.css.js'
import MenuList from "./MenuList/MenuList";
import Navigation from "../../components/Navbar/Navigation";
import Restaurant from "../../components/Restaurant/Restaurant";

class Home extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.nav}>
          <Navigation />
        </div>
        <div style={styles.content}>
          <div style={styles.info}>
            <Restaurant style={styles.restaurant} />
            <MenuList style={styles.menu}/>
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

// test
//123123

export default connect(mapStateToProps, mapDispatchToProps)(Home);
