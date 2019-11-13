import React from "react";
import Menu from "./Menu";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default Home;


// orderItem: [
//   {
//     itemId: "item1",
//     name: "Roast Beef With Hot Chili Pepper Rolled In Scallion Pancake",
//     quantity: 2,
//     price: 9.5
//   },
//   {
//     itemId: "item2",
//     name: "Scallions Pancake",
//     quantity: 4,
//     price: 5.95
//   },
//   {
//     itemId: "item3",
//     name: "Szechuan Wonton With Red Chilli Sauce",
//     quantity: 1,
//     price: 6.95
//   },
//   {
//     itemId: "item4",
//     name: "Cucumber In Chili Sauce",
//     quantity: 2,
//     price: 7.5
//   }
// ]