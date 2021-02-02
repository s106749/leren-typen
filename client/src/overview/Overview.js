import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Container } from 'reactstrap';
import "./overview.css";

export default class Overview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('/servers')
            .then(response => {
                this.setState({ list: response.data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    tableRows() {
        return this.state.list.map((row, i) => {
            return <TableRow value={row} key={i} />
        })
    }

    render() {
        return (
            <Container>
                { this.tableRows()}
            </Container>
        );
    }
}