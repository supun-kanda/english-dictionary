import React, { Component } from 'react'
import './customers.css'

export default class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }
    componentDidMount() {
        new Headers()
        fetch('http://localhost:3000/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => { console.log('Customers fetching successful') }))
            .catch(err => console.error('Customer fetching failure:', err));
    }
    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {
                        this.state.customers.map(customer =>
                            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
