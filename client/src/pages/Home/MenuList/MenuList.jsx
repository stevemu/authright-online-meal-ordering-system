import React, { Component } from "react";
import { Table, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { getMenu, updateOrderItem, addOrderItem } from "../../../utils";
import { connect } from "react-redux";
import { updateMenu } from "../../../Redux/actions/menuAction";

import styles from "./MenuList.css.js";
import ItemModal from "../../../components/ItemModal/ItemModal";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: null,
            currentPrice: "$0.00",
            currentItemId: null,
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
    };

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
        const targetId = event.currentTarget.getAttribute("data-id");

        this.setState({
            currentData: targetName,
            currentPrice: targetPrice,
            currentItemId: targetId,
        });
    };

    async updateOrder(value) {
        // use fetch to call api to push data to database.
        // console.log('update order')
        this.setState(state => ({
            ...state,
            modalShow: value,
            quantity: 1
        }));

        // send change of order item to backend
        let itemId = this.state.currentItemId;
        let quantity = this.state.quantity;

        await addOrderItem(itemId, quantity);
    }

    componentDidMount() {
        // fetch the project name, once it retrieves resolve the promsie and update the state.
        getMenu().then(result => this.props.updateMenu(result));
    }


    render() {
        const { data } = this.props;
        const { currentData, currentPrice } = this.state;

        // console.log(Object.keys(data))
        // console.log(Object.keys(data).slice(138, 158))

        return (
            <div style={styles.container}>
                <Navbar collapseOnSelect sticky="top" fixed="top" style={styles.nav}>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#lunch-special">Lunch Special</Nav.Link>
                            <Nav.Link href="#appetizers">Appetizers</Nav.Link>
                            <Nav.Link href="#chef">Chef's Specialties</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown" style={styles.dropdown}>
                                <NavDropdown.Item href="#beef">Beef / Lamb</NavDropdown.Item>
                                <NavDropdown.Item href="#chicken">Chicken / Duck</NavDropdown.Item>
                                <NavDropdown.Item href="#pork">Pork</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* lunch special */}
                <body style={styles.body}>
                    <Table style={styles.table} responsive>
                        <thead id="lunch-special">
                            <tr>
                                <th>ID</th>
                                <th>Lunch Special</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(0, 58).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* appetizers */}
                        <thead id="appetizers">
                            <tr>
                                <th>ID</th>
                                <th>Appetizers</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(56, 86).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* Chef's Specialties */}
                        <thead id="chef">
                            <tr>
                                <th>ID</th>
                                <th>Chef's Specialties</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(83, 102).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* Beef / Lamb */}
                        <thead id="beef">
                            <tr>
                                <th>ID</th>
                                <th>Beef / Lamb</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(101, 117).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* Pork */}
                        <thead id="chicken">
                            <tr>
                                <th>ID</th>
                                <th>Chicken / Duck</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(138, 158).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* Chicken */}
                        <thead id="pork">
                            <tr>
                                <th>ID</th>
                                <th>Pork</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).slice(117, 138).map((key, index) => (
                                <tr
                                    key={key}
                                    data-price={data[key].price}
                                    data-item={data[key].name}
                                    data-id={data[key].itemId}
                                    onClick={event => {
                                        this.setModalShow(true);
                                        this.fetchDetails(event);
                                    }}
                                >
                                    <td>{data[key].itemId}</td>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].price}</td>
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
                </body>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.menu
});

const mapDispatchToProps = dispatch => ({
    updateMenu: menu => dispatch(updateMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
