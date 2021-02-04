import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./exerciseCompleted.css";

export default class Exercise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nextExerciseId: this.props.location.results.nextExerciseId,
            mistakes: this.props.location.results.mistakes,
            amountCharacterMistakes: this.props.location.results.amountCharacterMistakes,
            amountCharactersTotal: this.props.location.results.amountCharactersTotal
        }
    }

    procentCalculations() {
        const procent = Number(((100 / this.state.amountCharactersTotal) * this.state.amountCharacterMistakes).toFixed(2));
        if (procent < 5) {
            return <p className="good">{procent}%</p>
        }
        else if (procent > 5 && procent < 20) {
            return <p className="medium">{procent}%</p>
        }
        else {
            return <p className="bad">{procent}%</p>
        }
    }

    render() {
        return (
            <Container>
                <Container className="result-background">
                    <h2 className="result-title">Resultaten</h2>
                    <h3>Aantal fouten: {this.state.mistakes}</h3>
                    <h3>Aantal letters fout: {this.state.amountCharacterMistakes}/{this.state.amountCharactersTotal}</h3>
                    <h3>Foutpercentage: {this.procentCalculations()}</h3>
                    <Link className="nav-button" to={'/oefening/' + this.state.nextExerciseId}>
                        <Button variant="contained" color="primary">
                            Volgende oefening
                    </Button>
                    </Link>
                    <br />
                    <br />
                    <Link className="nav-button" to={'/overzicht'}>
                        <Button variant="contained" color="primary">
                            Overzicht
                    </Button>
                    </Link>
                </Container>
            </Container>
        )
    }
}