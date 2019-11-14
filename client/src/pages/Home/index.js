import React from "react";

import Order from "./Order";

import styles from './index.css.js'
import MenuList from '../Home/MenuList/MenuList'
import Navigation from '../../components/Navbar/Navigation'
import Restaurant from '../../components/Restaurant/Restaurant'

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
            <MenuList />
          </div>
          <div style={styles.order}>
            <Order />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
