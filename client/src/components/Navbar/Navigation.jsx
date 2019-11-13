import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Order Food</Navbar.Brand>  
            </Navbar>
        </div>
    )
}
