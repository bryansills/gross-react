import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { VisibleLetter } from './';

export default class Answer extends Component {
    renderWord = (wordArr, visArr) => {
        return wordArr.map((char, ind) => {
            return <VisibleLetter letter={char} visible={visArr[ind]} />
        });
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderWord(this.props.splitWord, this.props.visibleWord)}
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