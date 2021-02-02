import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./overview.css";

export default class TableRow extends Component {

    render() {
        return (
            <Container  className="tableRow">
                <h3 className="exercise-title">Oefening {this.props.value.id}</h3>
                <Link className="nav-button" to={'/oefening/' + this.props.value.id}>
                    <Button variant="contained" color="primary">
                        Ga naar oefening
                    </Button>
                </Link>
            </Container>
        )
    }
}