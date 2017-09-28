import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Answer } from '../Views';

export default class PlayScreen extends Component {

    constructor(props) {
        super(props);

        const word = props.navigation.state.params.word;
        const splitWord = word.split('');
        let visibleWord = new Array(splitWord.length).fill(false);
        let count = 0;

        this.state = {word: word, splitWord: splitWord, visibleWord: visibleWord, count: count};
    }

    static navigationOptions = {
        title: 'Play!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to {this.state.word}!
                </Text>
                <Answer splitWord={this.state.splitWord} visibleWord={this.state.visibleWord}/>
                <Button onPress={this.updateVisible} title='REVEAL!' />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});