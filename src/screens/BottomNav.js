import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeProdusen from './HomeProdusen';
import Profile from './Profil';
import Histori from './Histori';

const Tab = createBottomTabNavigator();

export default class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBarOptions={{
                    labelStyle: styles.nunito12,
                    tabStyle: {
                        marginBottom: 7,
                        paddingTop: 6,
                    },
                    style: {

                    },
                    activeTintColor: '#4A4847',
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeProdusen}
                    options={{
                        tabBarLabel: 'Beranda',
                        tabBarIcon: ({ tintColor, focused }) => (
                            <View>
                                {focused ?
                                    <Image
                                        source={require('../assets/image/colorhome.png')}
                                    />
                                    :
                                    <Image
                                        source={require('../assets/image/iconnavhome.png')}
                                    />
                                }
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="History"
                    component={Histori}
                    options={{
                        tabBarLabel: 'Riwayat',
                        tabBarIcon: ({ tintColor, focused }) => (
                            <View>
                                {focused ?
                                    <Image
                                        source={require('../assets/image/colorriwayat.png')}
                                    />
                                    :
                                    <Image
                                        source={require('../assets/image/iconnavriwayat.png')}
                                    />
                                }
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profil"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({ tintColor, focused }) => (
                            <View>
                                {focused ?
                                    <Image
                                        source={require('../assets/image/colorprofil.png')}
                                    />
                                    :
                                    <Image
                                        source={require('../assets/image/iconnavprofil.png')}
                                    />
                                }
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    nunito12: {
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
    },
});