import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Keyboard from "react-simple-keyboard";
import CharactersToType from './CharactersToType';
import Button from '@material-ui/core/Button';
import "react-simple-keyboard/build/css/index.css";
import "./exercise.css";

export default class Exercise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: "",
            key: 0,
            layoutName: "azerty",
            isCorrect: true,
            nextExercise: 0
        }
    }

    componentDidMount() {
        axios.post('/servers/getById', { id: this.props.match.params.exercise })
            .then(response => {
                if (response.data[0] === undefined) {
                    this.props.history.push("/overzicht")
                }
                else {
                    this.setState({ characters: response.data[0].list })
                    this.setState({ key: 0 })
                    this.setState({ nextExercise: parseInt(this.props.match.params.exercise) + 1 })
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    handleChangeLayout = event => {
        this.setState({ layoutName: event.target.value })
    };

    onChangeInput = character => {
        const characters = this.state.characters;
        const key = this.state.key;
        if (characters.length > key) {
            if (character === "space") {
                character = " ";
            }
            if (characters[key] === character) {
                var number = this.state.key + 1;
                this.setState({ key: number });
                this.setState({ isCorrect: true });
            }
            else {
                this.setState({ isCorrect: false });
            }
        }
        if (characters.length === parseInt(key) + 1) {
            console.log("oefening is klaar");
        }
    }

    render() {
        return (
            <Container>
                <Container className="layout">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Toetsenbord indeling</FormLabel>
                        <RadioGroup aria-label="layout" value={this.state.layoutName} onChange={this.handleChangeLayout}>
                            <FormControlLabel value="azerty" control={<Radio color="primary" />} label="Azerty" />
                            <FormControlLabel value="qwerty" control={<Radio color="primary" />} label="Qwerty" />
                        </RadioGroup>
                    </FormControl>
                </Container>
                <CharactersToType value={{ characters: this.state.characters, key: this.state.key, isCorrect: this.state.isCorrect }} />
                <KeyboardEventHandler
                    handleKeys={[
                        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'space']}
                    onKeyEvent={(key, e) => this.onChangeInput(key)} />
                <Keyboard className="simple-keyboard"
                    keyboardRef={r => (this.keyboard = r)}
                    layoutName={this.state.layoutName}
                    physicalKeyboardHighlight={true}
                    layout={{
                        qwerty: [
                            "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                            "{tab} q w e r t y u i o p [ ] \\",
                            "{capslock} a s d f g h j k l ; ' {enter}",
                            "{shiftleft} z x c v b n m , . / {shiftright}",
                            "{space}"
                        ],
                        azerty: [
                            "² & é \" ' ( § è ! ç à ) - {backspace}",
                            "{tab} a z e r t y u i o p ^ $ µ",
                            "{capslock} q s d f g h j k l m ù {enter}",
                            "{shiftleft} w x c v b n , ; : = {shiftright}",
                            "{space}"
                        ]
                    }}
                />
                <Container className="nav-button-exercise">
                    <a className="nav-button" href={'/oefening/' + this.state.nextExercise}>
                        <Button variant="contained" color="primary">
                            Ga naar volgende oefening
                    </Button>
                    </a>
                </Container>
            </Container>
        )
    }
}   