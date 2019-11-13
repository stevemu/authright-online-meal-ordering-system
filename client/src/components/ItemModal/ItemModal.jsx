import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Button'


class ItemModal extends Component {
    render() {
        const { name, price } = this.props

        let number = Number(price.replace(/[^0-9.-]+/, ""));
        let itemTotalPrice = (this.props.quantity * number).toFixed(2)

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <p>Quantity</p>
                        <Button onClick={this.props.minushandler}>-</Button>
                        <p>{this.props.quantity}</p>
                        <Button onClick={this.props.addhandler}>+</Button>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <p>Item total: ${itemTotalPrice}</p>
                    <Button onClick={this.props.updateorder}>{this.props.command}</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

export default ItemModal;