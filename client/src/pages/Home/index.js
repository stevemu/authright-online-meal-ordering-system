import React from "react";
import Menu from "./Menu";
import Order from "./Order";
import { connect } from "react-redux";
import {fetchMenu} from '../../actions/menu';
import {fetchOrder} from '../../actions/order';

// container
class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Order />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menu,
    order: state.menu
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMenu: () => {
      dispatch(fetchMenu())
    },
    fetchMenu: () => {
      dispatch(fetchOrder())
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
