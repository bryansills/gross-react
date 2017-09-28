import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class VisibleLetter extends Component {

    render() {
        return (
                <Text style={styles.welcome}>
                    {this.props.visible ? this.props.letter : '_'}
                </Text>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});