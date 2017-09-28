import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class LetterButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.press}>
                <Text style={styles.welcome}>
                    {this.props.used ? '_' : this.props.letter}
                </Text>
            </TouchableOpacity>
        );
    }

    press = () => {
        this.props.onLetterPress(this.props.letter);
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
    }
});