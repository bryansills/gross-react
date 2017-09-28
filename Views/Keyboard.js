import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { LetterButton } from './';

export default class Keyboard extends Component {
    renderRow = (letterArr, usedLetters) => {
        return letterArr.map((char, ind) => {
            let used = usedLetters.includes(char);
            return <LetterButton letter={char} used={used} onLetterPress={this.props.onLetterPress}/>
        });
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    {this.renderRow(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], this.props.usedLetters)}
                </View>
                <View style={styles.container}>
                    {this.renderRow(['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], this.props.usedLetters)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});