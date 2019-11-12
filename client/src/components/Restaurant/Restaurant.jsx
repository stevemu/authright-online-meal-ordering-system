import React, { Component } from 'react'
import { Jumbotron, ButtonGroup, Button } from 'react-bootstrap'
// import './style.css'

const container = {
    border: '1px solid lightgrey',
    height: '30vh',
}
const JumbotronStyle = {
    backgroundColor: 'white',
    marginBottom: '-2rem',
    padding: '1.5em 2em'
}

export default class Restaurant extends Component {

    render() {

        return (
            <div style={container}>
                <Jumbotron style={JumbotronStyle}>
                    <h1>Taipei Cuisine</h1>
                    <p>68 Billings Rd, Quincy, MA 02171</p>
                    <p>
                        <ButtonGroup toggle className="mt-3">
                            <Button defaultChecked>
                                Steve
                            </Button>
                            <Button>
                                Shawn
                            </Button>
                        </ButtonGroup>
                    </p>
                </Jumbotron>
            </div >
        )
    }
}
