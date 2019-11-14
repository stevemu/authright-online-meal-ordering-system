import React from "react";
import { getOrder, updateOrderItem } from "../../../utils";

import OrderSummary from "./OrderSummary";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        L1: 2,
        L2: 3
      },
      menu: {
        L1: { itemId: "L1", name: "fish", price: 11 },
        L2: { itemId: "L2", name: "egg", price: 222 }
      }
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    let order = await getOrder();
    this.props.updateOrder(order);
  }

  // componentDidUpdate() {
  //   // console.log(this.props.menu);
  //   // console.log(this.props.order);
  // }

  // update order item quantity
<<<<<<< HEAD
  handleQuantity(quantity, itemId) {
=======
  async handleQuantity(quantity, itemId) {
>>>>>>> master
    let newOrder = {
      ...this.props.order,
      [itemId]: parseInt(quantity)
    };

<<<<<<< HEAD
    this.setState({order: newOrder});
  }
=======
    this.props.updateOrder(newOrder);
    await updateOrderItem(itemId, quantity);
>>>>>>> master

  }

  // handleDelete(itemId) {
  //   console.log("Delete!", itemId);
  // }

  // pulling
  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  // }

  // async tick() {
  // let apiData = await getOrder();
  // this.setState({
  //   orderItem: apiData,
  //   counter: (this.state.counter += 1)
  // });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  // combine menu and order
  generateFullOrderItems(menu, order) {
    let arr = Object.keys(order).map(itemId => {
      let quantity = order[itemId];
      let { name, price } = menu[itemId];
      return {
        itemId,
        quantity,
        price,
        name
      };
    });
    return arr;
  }

  render() {

    return (
      <OrderSummary
        orderItems={this.generateFullOrderItems(this.props.menu, this.props.order)}
        handleOnSelectQuantity={this.handleQuantity}
        handleOnDelete={this.handleDelete}
      />
    );
  }
}
