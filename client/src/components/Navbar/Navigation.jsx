import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import styles from './Navigation.css.js'

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top" style={styles.navigation}>
                <Navbar.Brand href="/">Order Food</Navbar.Brand>
                <Nav className="mr-auto" />
                {/* <form onSubmit={props.handleChange}> */}
                    {/* <Form inline role="form"> */}
                    <input type="text" placeholder="Search" onChange={props.handleChange}/>
                    {/* <button type="submit">Search</button> */}
                    {/* <FormControl type="text" placeholder="Search" />
                        <Button variant="outline-primary" type="submit">Search</Button> */}
                    {/* </Form> */}
                {/* </form> */}
                {/* <Form inline onSubmit={props.handleChange}>
                    <FormControl type="text" placeholder="Search" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}

export default Navigation;