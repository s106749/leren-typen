import React, { Component } from 'react'

export default class CharactersToType extends Component {

    charactersBefore() {
        var beforeList = "";
        for (var i = 0; i < this.props.value.key; i++) {
            beforeList += this.props.value.characters[i];
        }
        return <h3 className='first'>{beforeList}</h3>
    }

    currentCharacter() {
        var i = this.props.value.key;
        if (this.props.value.isCorrect) {
            return <h3 className='middle'>{this.props.value.characters[i]}</h3>
        }
        else {
            return <h3 className='incorrect-character'>{this.props.value.characters[i]}</h3>
        }
    }

    charactersAfter() {
        var afterList = "";
        for (var i = this.props.value.key + 1; i < this.props.value.characters.length; i++) {
            afterList += this.props.value.characters[i];
        }
        return <h3 className='last'>{afterList}</h3>
    }

    render() {
        return (
            <div className='characters-to-type'>
                <br/>
                { this.charactersBefore()}
                { this.currentCharacter()}
                { this.charactersAfter()}
            </div>
        )
    }
}