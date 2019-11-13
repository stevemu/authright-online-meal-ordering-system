import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Button'


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
                    <Container>
                        <Row className="show-grid">
                            <Col xs={4} md={4}>
                                <p>Quantity</p>
                            </Col>
                            <Col xs={4} md={4}>
                                <Button onClick={this.props.minushandler}>-</Button>
                            </Col>
                            <Col xs={4} md={4}>
                                <p>{this.props.quantity}</p>
                            </Col>
                            <Col xs={4} md={4}>
                                <Button onClick={this.props.addhandler}>+</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <p>Item total: ${itemTotalPrice}</p>
                    <Button onClick={this.props.updateorder}>{this.props.command}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ItemModal;