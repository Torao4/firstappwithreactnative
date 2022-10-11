import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profil = () => {
    const navigation = useNavigation();

    const toEditProfil = () => {
        navigation.navigate('EditProfil');
    };

    return (
        <View style={{
            backgroundColor: '#FFF',
            height: '100%'
        }}>
            <View style={{
                height: 118,
                backgroundColor: '#FAB80A',
                borderBottomEndRadius: 30,
                borderBottomStartRadius: 30,
                justifyContent: 'center'
            }}>
                <View style={{ flexDirection: 'row', paddingLeft: 32, paddingRight: 32, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', marginLeft: 14, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#FFF',
                        }}>Profil</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#4A4847'
                        }}>UMKM MELATI</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{
                height: '100%'
            }}>
                <View style={{
                    padding: 32
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/image/Logom.png')}
                        />
                    </View>

                    <View style={styles.boxakun}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text>Akun</Text>
                            <TouchableOpacity style={styles.btnedit}
                                onPress={() => {
                                    toEditProfil();
                                }}>
                                <View style={styles.vbtn}>
                                    <Text style={{ color: '#F68713', fontSize: 10 }}>Edit Profil</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.txtprofil}>
                            <Text style={styles.txtnm}>Nama Lengkap</Text>
                            <Text style={styles.txt}>Ferry</Text>
                        </View>
                        <View style={styles.garis}></View>

                        <View style={styles.txtprofil}>
                            <Text style={styles.txtnm}>Nomer</Text>
                            <Text style={styles.txt}>0810000000</Text>
                        </View>
                        <View style={styles.garis}></View>
                        {/* <View style={styles.txtprofil}>
                            <Text style={styles.txtnm}>Password</Text>
                            <Text style={styles.txt}>******</Text>
                        </View>
                        <View style={styles.garis}></View> */}
                    </View>
                    <TouchableOpacity style={styles.boxlogout}>
                        <View style={styles.boxbtn}>
                            <Image
                                style={styles.logobtn}
                                source={require('../assets/image/Logout.png')}
                            />
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Keluar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 153,
        backgroundColor: '#FFF',
        borderRadius: 3
    },
    boxakun: {
        margin: 21,

    },
    txtprofil: {
        flexDirection: 'row',
        marginTop: 20
    },
    txt: {
        marginLeft: 'auto',

        fontSize: 14
    },
    garis: {
        height: 1,
        backgroundColor: '#979797',
        marginTop: 5
    },
    txtnm: {
        fontSize: 14,
        color: '#979797',
    },
    boxlogout: {
        height: 56,
        margin: 21,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        borderRadius: 11,
        shadowColor: '#acacac',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        alignItems: 'center'

    },
    boxbtn: {
        flexDirection: 'row'
    },
    logobtn: {
        marginRight: 5
    },
    btnedit: {
        marginLeft: 'auto',
        height: 27,
        width: 89,
        backgroundColor: '#F68713',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    vbtn: {
        backgroundColor: '#FFF',
        height: 25,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
});

export default Profil;