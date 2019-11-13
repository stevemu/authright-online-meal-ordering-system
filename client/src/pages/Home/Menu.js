import React, { Component } from 'react'
import MenuList from '../../components/Menu/MenuList'
import Navigation from '../../components/Navbar/Navigation'
import Restaurant from '../../components/Restaurant/Restaurant'

import styles from './Menu.css.js'

export default class Menu extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Navigation />
        <div style={styles.content}>
          <div style={styles.info}>
            <Restaurant style={styles.restaurant}/>
            <MenuList />
          </div>
          <div>
            Subtotal
          </div>
        </div>
      </div >
    )
  }
}
