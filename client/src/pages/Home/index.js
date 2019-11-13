import React from "react";
import Menu from "./Menu";
import Order from "./Order";

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

export default Home;