import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./overview.css";

export default class TableRow extends Component {

    difficulty() {
        if(this.props.value.difficulty === "makkelijk"){
            return <h3 className="difficulty-easy">Moeilijkheidsgraad: {this.props.value.difficulty}</h3>
        }
        if(this.props.value.difficulty === "gemiddeld"){
            return <h3 className="difficulty-medium">Moeilijkheidsgraad: {this.props.value.difficulty}</h3>
        }
        if(this.props.value.difficulty === "moeilijk"){
            return <h3 className="difficulty-hard">Moeilijkheidsgraad: {this.props.value.difficulty}</h3>
        }
    }

    render() {
        return (
            <Container className="tableRow">
                <h2 className="exercise-title">Oefening {this.props.value.id}</h2>
                {this.difficulty()}
                <h3>{this.props.value.description}</h3>
                <Link className="nav-button" to={'/oefening/' + this.props.value.id}>
                    <Button variant="contained" color="primary">
                        Ga naar oefening
                    </Button>
                </Link>
            </Container>
        )
    }
}