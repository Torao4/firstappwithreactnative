import React, { Component } from 'react';

import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native'

//const styles = require('../assets/styles/Styles');

export default class ButtonGreen extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[LStyles.buttonOren,
                {
                    borderRadius: this.props.border == 0 ? 0 : 10,
                    backgroundColor: this.props.warna !== '' ? this.props.warna : '#F68713',
                }]}
                onPress={this.props.process}>
                <View style={LStyles.vbox}>
                    {this.props.images &&
                        <Image
                            source={this.props.images}
                        />
                    }
                    <Text style={[LStyles.dmSans14BoldWhite, {
                        textAlign: 'center',
                        color: this.props.colors !== '' ? this.props.color : '#FFF'
                    }]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const LStyles = StyleSheet.create({
    buttonOren: {
        paddingVertical: 19,
        textAlign: 'center'
    },
    dmSans14BoldWhite: {
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10
    },
    vbox: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
