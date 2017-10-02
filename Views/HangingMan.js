import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { VisibleLetter } from './';

export default class HangingMan extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.attemptsLeft}</Text>
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