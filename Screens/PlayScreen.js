import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Answer, Keyboard } from '../Views';

export default class PlayScreen extends Component {

    constructor(props) {
        super(props);

        const word = props.navigation.state.params.word;
        const splitWord = word.split('');
        let visibleWord = new Array(splitWord.length).fill(false);
        let count = 0;
        let usedLetters = [];

        this.state = {word: word, splitWord: splitWord, visibleWord: visibleWord, count: count, usedLetters: usedLetters};
    }

    static navigationOptions = {
        title: 'Play!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Answer splitWord={this.state.splitWord} visibleWord={this.state.visibleWord}/>
                <Button onPress={this.updateVisible} title='REVEAL!' />
                <Keyboard usedLetters={this.state.usedLetters} onLetterPress={this.letterPressed}/>
            </View>
        );
    }

    updateVisible = () => {
        this.setState((prevState) => {
            let newState = {...prevState};            
            newState.visibleWord[newState.count] = true;
            newState.count++;

            return newState;
        });
    };

    letterPressed = (letter) => {
        console.log(letter);

        this.setState((prevState) => {
            let newState = {...prevState};
            newState.usedLetters.push(letter);

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