import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Keyboard } from '../Views';

export default class ChooseScreen extends Component {

    constructor(props) {
        super(props);

        let word = '';

        this.state = {word: word};
    }

    static navigationOptions = {
        title: 'Choose A Word',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Your word is:
                </Text>
                <Text style={styles.welcome}>
                    {this.state.word}
                </Text>
                <Button 
                    onPress={() => navigate('Play', {word: this.state.word})}
                    title="Let's Play!" />
                <Keyboard usedLetters={[]} onLetterPress={this.letterPressed}/>
            </View>
        );
    }
    
    letterPressed = (letter) => {
        this.setState((prevState) => {
            let newState = {...prevState};
            newState.word += letter;

            return newState
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