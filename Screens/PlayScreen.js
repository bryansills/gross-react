import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Answer, HangingMan, Keyboard } from '../Views';

export default class PlayScreen extends Component {

    constructor(props) {
        super(props);

        const word = props.navigation.state.params.word;
        const splitWord = word.split('');
        let count = 0;
        let usedLetters = [];
        let attemptsLeft = 6;

        this.state = { word: word, splitWord: splitWord, count: count, usedLetters: usedLetters, attemptsLeft: attemptsLeft };
    }

    static navigationOptions = {
        title: 'Play!',
    };

    render() {
        return (
            <View style={styles.container}>
                <HangingMan attemptsLeft={this.state.attemptsLeft} />
                <Answer splitWord={this.state.splitWord} usedLetters={this.state.usedLetters} />
                <Keyboard usedLetters={this.state.usedLetters} onLetterPress={this.letterPressed} />
            </View>
        );
    }

    updateVisible = () => {
        this.setState((prevState) => {
            let newState = { ...prevState };
            newState.visibleWord[newState.count] = true;
            newState.count++;

            return newState;
        });
    };

    letterPressed = (letter) => {
        this.setState((prevState) => {
            let newState = { ...prevState };
            newState.usedLetters.push(letter);

            if (newState.splitWord.includes(letter)) {
                let solved = true;
                newState.splitWord.map((char, ind) => {
                    if (!newState.usedLetters.includes(char)) {
                        solved = false;
                    }
                });

                if (solved) {
                    newState.attemptsLeft = "You Won!";
                }
            } else {
                newState.attemptsLeft--;

                if (newState.attemptsLeft === 0) {
                    newState.attemptsLeft = "You Lost!"
                }
            }

            return newState;
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});