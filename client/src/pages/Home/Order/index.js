import React from "react";
import { getOrder } from "../../../utils";

import OrderSummary from "./OrderSummary";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        "L1": 2,
        "L2": 3
      },
      menu: {
        "L1": {itemId: "L1", name: "fish", price: 11},
        "L2": {itemId: "L2", name: "egg", price: 222},
      }

    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    let order = await getOrder();
    console.log(order);
  }

  // update order item quantity
  handleQuantity(quantity, itemId) {

    // debugger;
    let newOrder = {
      ...this.state.order,
      [itemId]: parseInt(quantity)
    };

    // debugger;
    // console.log();
    this.setState({order: newOrder});
  }

  handleDelete(itemId) {
    // this.setState({
    //   orderItem: this.state.orderItem.filter((element) => element.itemId !== itemId)
    // });
    console.log("Delete!", itemId);
  }

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

  render() {
    // combine menu and order
    function generateFullOrderItems(menu, order) {
      // debugger;
      // console.log(Object.keys(order));
      let arr = Object.keys(order).map((itemId) => {
        let quantity = order[itemId];
        let {name, price} = menu[itemId];
        return {
          itemId,
          quantity,
          price, 
          name
        }
      })
      return arr;
      // return [];
    }

    // array of order: [{itemId, quantiy, name, price}, ...]

    return (
      <OrderSummary
        orderItems={generateFullOrderItems(this.state.menu, this.state.order)}
        handleOnSelectQuantity={this.handleQuantity}
        handleOnDelete={this.handleDelete}
      />
    );
  }
}
