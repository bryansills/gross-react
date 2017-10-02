import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { VisibleLetter } from './';

export default class HangingMan extends Component {

    render() {
        return (
            <View>
                <Image source={require('../images/noose.png')} style={{width:240, height:240}} />
                <Image source={require('../images/head.jpg')} style={[styles.head, {display: (this.props.attemptsLeft > 5) ? 'none' : 'flex'}]}/>
                <Image source={require('../images/left-arm.jpg')} style={[styles.leftArm, {display: (this.props.attemptsLeft > 4) ? 'none' : 'flex'}]}/>
                <Image source={require('../images/left-leg.jpg')} style={[styles.leftLeg, {display: (this.props.attemptsLeft > 3) ? 'none' : 'flex'}]}/>
                <Image source={require('../images/right-arm.jpg')} style={[styles.rightArm, {display: (this.props.attemptsLeft > 2) ? 'none' : 'flex'}]}/>
                <Image source={require('../images/right-leg.jpg')} style={[styles.rightLeg, {display: (this.props.attemptsLeft > 1) ? 'none' : 'flex'}]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 114,
        top: 40
    },
    leftArm: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 70,
        top: 70
    },
    leftLeg: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 90,
        top: 120
    },
    rightArm: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 160,
        top: 70
    },
    rightLeg: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 140,
        top: 120
    },
});