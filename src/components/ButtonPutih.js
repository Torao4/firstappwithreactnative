import React, { Component } from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class ButtonGreen extends Component {
    render() {
        return (
            <TouchableOpacity style={[LStyles.buttonOren, { borderRadius: this.props.border == 1 ? 0 : 10 }]} onPress={this.props.process}>
                <Text style={[LStyles.dmSans14BoldWhite, { textAlign: 'center' }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const LStyles = StyleSheet.create({
    buttonOren: {
        backgroundColor: '#FFF',
        paddingVertical: 19,
        height: 60,
        textAlign: 'center'
    },
    dmSans14BoldWhite: {
        fontFamily: 'DMSans-Regular',
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
});
