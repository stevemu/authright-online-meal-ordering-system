import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

// const table = {
//     overflow: 'scroll',
// }

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
            ]
        }
    }

    render() {
        const { data } = this.state;

        return (
            <div style={{ padding: '0rem 2rem', border: '1px solid lightgrey', overflow: 'scroll' }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lunch Special</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
