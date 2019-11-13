import React, { Component } from 'react'
import { Table, Nav } from 'react-bootstrap'

import styles from './MenuList.css.js'
import ItemModal from '../ItemModal/ItemModal'

export default class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    name: 'Shrimp W. Scramble Eggs',
                    price: '$8.95'
                },
                {
                    id: '2',
                    name: 'Beef With Marinated Sauce',
                    price: '$8.95'
                },
                {
                    id: '3',
                    name: 'Crispy Tofu',
                    price: '$8.95'
                },
                {
                    id: '4',
                    name: 'Kong Pao Tofu',
                    price: '$8.95'
                },
                {
                    id: '5',
                    name: 'Kong Pao Chicken',
                    price: '$8.95'
                },
                {
                    id: '6',
                    name: 'Chicken in Curry Sauce',
                    price: '$8.95'
                },
                {
                    id: '7',
                    name: 'Sesame Chicken',
                    price: '$8.95'
                },
                {
                    id: '8',
                    name: 'Three Cups Chicken',
                    price: '$8.95'
                },
                {
                    id: '9',
                    name: 'Three Cups Chicken',
                    price: '$8.95'
                },
                {
                    id: '10',
                    name: 'Three Cups Chicken',
                    price: '$8.95'
                },
            ],
            currentData: null,
            currentPrice: '$0.00',
            quantity: 1,
            unitprice: 8.95,
            modalShow: false,
            command: 'Add',
        }
    }

    setModalShow(value) {
        this.setState(state => ({
            ...state,
            modalShow: value,
            quantity: 1
        }))
    }

    setQuantity(value) {
        this.setState({
            quantity: this.state.quantity + value,
        })
    }

    addHandler = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    minusHandler = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    fetchDetails = (event) => {
        const targetName = event.currentTarget.getAttribute("data-item");
        const targetPrice = event.currentTarget.getAttribute("data-price");

        this.setState({
            currentData: targetName,
            currentPrice: targetPrice
        })
    }

    updateOrder(value) {
        // use fetch to call api to push data to database.
        console.log('update order')
        this.setState(state => ({
            ...state,
            modalShow: value,
            quantity: 1
        }))
    }

    render() {
        const { data, currentData, currentPrice } = this.state;

        return (
            <div style={styles.container}>
                <Nav variant="tabs" defaultActiveKey="/" fixed="top" style={styles.header}>
                    <Nav.Item style={styles.title}>
                        Menu
                    </Nav.Item>
                    <div style={styles.tag}>
                        <Nav.Item>
                            <Nav.Link href="/">Lunch Special</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Chef's Specialties</Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>
                <Table style={styles.table} responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lunch Special</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}
                                data-price={item.price}
                                data-item={item.name}
                                onClick={(event) => { this.setModalShow(true); this.fetchDetails(event); }}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <ItemModal
                    data={data}
                    name={currentData}
                    price={currentPrice}
                    show={this.state.modalShow}
                    quantity={this.state.quantity}
                    addhandler={this.addHandler}
                    minushandler={this.minusHandler}
                    unitprice={this.state.unitprice}
                    command={this.state.command}
                    onHide={() => this.setModalShow(false)}
                    updateorder={() => this.updateOrder(false)} />
            </div>
        )
    }
}
