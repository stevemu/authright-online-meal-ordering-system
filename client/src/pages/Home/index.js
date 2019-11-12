import React from "react";
import Menu from "./Menu";
import Order from "./Order";

// container
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [
        {
          itemId: "item1",
          name: "Roast Beef With Hot Chili Pepper Rolled In Scallion Pancake",
          quantity: 2,
          price: 9.5
        },
        {
          itemId: "item2",
          name: "Scallions Pancake",
          quantity: 4,
          price: 5.95
        },
        {
          itemId: "item3",
          name: "Szechuan Wonton With Red Chilli Sauce",
          quantity: 1,
          price: 6.95
        },
        {
          itemId: "item4",
          name: "Cucumber In Chili Sauce",
          quantity: 2,
          price: 7.5
        }
      ]
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // update order item quantity
  handleQuantity(quantity, itemId) {
    this.setState({
      orderItems: this.state.orderItems.map(element => 
        element.itemId === itemId ? {...element, quantity: quantity} : element
      )
    });
  }

  handleDelete(itemId) {
    // this.setState({
    //   orderItems: this.state.orderItems.filter((element) => element.itemId !== itemId)
    // });
    console.log('Delete!', itemId);
  }

  render() {
    return (
      <div>
        <Menu />
        <Order
          orderItems={this.state.orderItems}
          handleOnSelectQuantity={this.handleQuantity}
          handleOnDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Home;
