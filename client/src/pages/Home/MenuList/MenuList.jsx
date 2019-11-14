import React, { Component } from "react";
import { Table, Nav } from "react-bootstrap";

import { getMenu } from "../../../utils";
import { connect } from "react-redux";
import { updateMenu } from "../../../Redux/actions/menuAction";

import styles from './MenuList.css.js'
import ItemModal from "../../../components/ItemModal/ItemModal";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: null,
            currentPrice: "$0.00",
            quantity: 1,
            unitprice: 8.95,
            modalShow: false,
            command: "Add",
            menu: []
        };
    }

    setModalShow(value) {
        this.setState(state => ({
            ...state,
            modalShow: value,
            quantity: 1
        }));
    }

    setQuantity(value) {
        this.setState({
            quantity: this.state.quantity + value
        });
    }

    addHandler = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    };

    minusHandler = () => {
        this.setState({
            quantity: this.state.quantity - 1
        });
    };

    fetchDetails = event => {
        const targetName = event.currentTarget.getAttribute("data-item");
        const targetPrice = event.currentTarget.getAttribute("data-price");

        this.setState({
            currentData: targetName,
            currentPrice: targetPrice
        });
    };

    updateOrder(value) {
        // use fetch to call api to push data to database.
        console.log('update order')
        this.setState(state => ({
            ...state,
            modalShow: value,
            quantity: 1,
        }))
    }

    componentDidMount() {
        // fetch the project name, once it retrieves resolve the promsie and update the state.
        getMenu().then(result => this.props.updateMenu(result));
        // console.log(this.state.menu)
    }

    render() {
        const { data } = this.props;
        const { currentData, currentPrice } = this.state;

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
                            <th>ID</th>
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
                                <td>{item.itemId}</td>
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

const mapStateToProps = state => ({
    data: state.menu.menu
});

const mapDispatchToProps = dispatch => ({
    updateMenu: menu => dispatch(updateMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
