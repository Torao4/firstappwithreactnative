import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonOren from '../components/ButtonOren';

const Register = () => {
    const navigation = useNavigation();

    const toLogin = () => {
        navigation.navigate('Login');
    };

    const [namalengkap, setNamaLengkap] = useState('');
    const [namausaha, setNamaUsaha] = useState('');
    const [nomor, setNomor] = useState('');
    const [password, setPassword] = useState('');
    const [Konfirmasipassword, setKonfirmasiPassword] = useState('');

    const toHome = async () => {
        try {
            await AsyncStorage.setItem('namalengkap', namalengkap);
            await AsyncStorage.setItem('namausaha', namausaha);
            await AsyncStorage.setItem('nomor', nomor);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('konfirmasipassword', Konfirmasipassword);
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
                }}>Daftar</Text>
            </View>
            <View style={{
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                backgroundColor: '#FFF',
                height: '100%'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 32 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#FBBC05'
                        }}>Selamat Datang di</Text>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginTop: 3
                        }}>MERSYPRICE</Text>
                    </View>
                    <Image
                        style={styles.logo}
                        source={require('../assets/image/logo.png')}
                    />
                </View>
                <ScrollView>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNamaLengkap(text)}
                            value={namalengkap}
                            placeholder="Nama Lengkap"
                        />
                        <View style={styles.garis}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNamaUsaha(text)}
                            value={namausaha}
                            placeholder="Nama Usaha"
                        />
                        <View style={styles.garis}></View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNomor(text)}
                            value={nomor}
                            placeholder="Nomor Hp"
                        />
                        <View style={styles.garis}></View>

                    </View>
                    <View style={styles.vbutton}>
                        <View style={styles.button}>
                            <ButtonOren title="Daftar" process={() => {
                                toHome();
                            }} warna='#F68713' color='#FFF'
                                images={require('../assets/image/Login.png')}
                            />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center'

                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#B5B5C3',
                                marginTop: 15
                            }}>
                                Sudah memiliki Akun?
                            </Text>
                            <Text
                                onPress={() => {
                                    toLogin();
                                }}
                                style={{
                                    fontSize: 12,
                                    color: '#F68713',
                                    marginTop: 15,
                                    marginLeft: 5
                                }}>
                                Login
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
        borderColor: '#bfbfbf',
        borderRadius: 10
    },
    logo: {
        marginLeft: 'auto',
        width: 40,
        height: 40
    },
    vbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 400

    },
});

export default Register;