import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import styles from './Navigation.css.js'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top" style={styles.navigation}>
                <Navbar.Brand href="/">Order Food</Navbar.Brand>
            </Navbar>
        </div>
    )
}
