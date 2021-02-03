import React, { Component } from 'react'
import { Container } from 'reactstrap';
import Button from '@material-ui/core/Button';


export default class NextExercise extends Component {

    render() {
        return (
            <Container className="tableRow">
                <a className="nav-button" href={'/oefening/' + this.props.nextExerciseId}>
                    <Button variant="contained" color="primary">
                        Ga naar volgende oefening
                    </Button>
                </a>
            </Container>
        )
    }
}