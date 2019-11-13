import React from "react";
import Menu from "./Menu";
import Order from "./Order";

const container = {
  height: '100vh',
  fontFamily: 'Open Sans',
}

class Home extends React.Component {
  render() {
    return (
      <div style={container}>
        <Menu />
        <Order />
      </div>
    );
  }
}

export default Home;