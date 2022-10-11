import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonOren from '../components/ButtonOren';

const Login = () => {

    const navigation = useNavigation();

    const toRegister = () => {
        navigation.navigate('Register');
    };

    const [nomor, setNomor] = useState('');
    const [password, setPassword] = useState('');

    const toHome = async () => {
        try {
            await AsyncStorage.setItem('nomor', nomor);
            await AsyncStorage.setItem('password', password);

            navigation.navigate('BottomNav');
        } catch (e) {

        }
    };

    return (
        <View style={{ backgroundColor: '#FAB80A' }}>
            <View style={{
                height: 100,
            }}>
                <Text style={{
                    marginTop: 35,
                    marginLeft: 30,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Masuk</Text>
            </View>
            <View style={{
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                backgroundColor: '#FFF',
                height: '100%'
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{
                            fontSize: 12,
                            color: '#FBBC05',
                            marginTop: 48
                        }}>Selamat Datang di</Text>
                    </View>
                    <Image
                        style={styles.logo}
                        source={require('../assets/image/Logom.png')}
                    />
                </View>
                <ScrollView>

                    <View style={{
                        marginTop: 42,
                    }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNomor(text)}
                            value={nomor}
                            placeholder="Nomor HP"
                        />
                        <View style={styles.garis}></View>

                    </View>
                    <View style={styles.vbutton}>
                        <View style={styles.button}>
                            <ButtonOren title="Login" process={() => {
                                toHome();
                            }} warna='#F68713' color='#FFF'
                                images={require('../assets/image/Login.png')}
                            />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 10

                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#B5B5C3',
                                marginTop: 15
                            }}>
                                Belum memiliki Akun?
                            </Text>
                            <Text
                                onPress={() => {
                                    toRegister();
                                }}
                                style={{
                                    fontSize: 12,
                                    color: '#F68713',
                                    marginTop: 15,
                                    marginLeft: 5
                                }}>
                                Daftar
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 32,
        marginRight: 32,
        marginTop: 15,
        padding: 10
    },
    garis: {
        height: 2,
        backgroundColor: '#D3D3D3',
        marginLeft: 40,
        marginRight: 40,
    },
    button: {
        width: 311,

    },
    button1: {
        marginTop: 15,
        width: 311,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#bfbfbf',
        borderRadius: 10
    },
    vbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginTop: 85,
    },
    logo: {
        width: 180,
        height: 180
    },
});

export default Login;