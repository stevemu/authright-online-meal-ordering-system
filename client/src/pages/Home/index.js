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
          itemId: 'item1',
          name: 'Roast Beef With Hot Chili Pepper Rolled In Scallion Pancake',
          quantity: 2,
          price: 9.50
        },
        {
          itemId: 'item2',
          name: 'Scallions Pancake',
          quantity: 4,
          price: 5.95,
        },
        {
          itemId: 'item3',
          name: 'Szechuan Wonton With Red Chilli Sauce',
          quantity: 1,
          price: 6.95,
        },
        {
          itemId: 'item4',
          name: 'Cucumber In Chili Sauce',
          quantity: 2,
          price: 7.50,
        }
      ]
    };
  }

  render() {
    
    return (
      <div>
        <Menu />
        <Order orderItems={this.state.orderItems}/>
      </div>
    );
  }
}

export default Home;