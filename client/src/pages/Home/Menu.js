import React, { Component, Fragment } from 'react'
import MenuList from '../../components/Menu/MenuList'
import Navigation from '../../components/Navbar/Navigation'
import Restaurant from '../../components/Restaurant/Restaurant'
import { Row, Col } from 'react-bootstrap'


export default class Menu extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div>
            <Row>
              <Col xs={7}>
                <Restaurant />
                <MenuList />
              </Col>
              <Col xs={5}>
                right
            </Col>
            </Row>
        </div>
      </Fragment>
    )
  }
}
