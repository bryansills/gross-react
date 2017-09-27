import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Answer } from '../Views';

export default class PlayScreen extends Component {

    constructor(props) {
        super(props);

        let word = props.navigation.state.params.word;
        let splitWord = word.split('');
        let visibleWord = new Array(splitWord.length).fill(false);

        this.state = {word: word, splitWord: splitWord, visibleWord: visibleWord};
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
            </View>
        );
    }
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