import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Histori = () => {

    const navigation = useNavigation();

    const toDetailProduk = () => {
        navigation.navigate('RiwayatDetailProduk');
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
                <View style={{ flexDirection: 'row', paddingLeft: 32, paddingRight: 32, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', marginLeft: 14, }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#FFF'
                        }}>Riwayat</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#4A4847'
                        }}>UMKM</Text>
                    </View>

                    <Image
                        style={styles.logo}
                        source={require('../assets/image/logohome.png')}
                    />
                </View>
            </View>

            <ScrollView style={{
                marginTop: 20,
                height: '100%'
            }}>
                <View style={{
                    padding: 50
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.boxtambah}>
                            <Text style={{
                                fontSize: 12,
                                color: '#080F18',
                                fontWeight: 'bold'
                            }}>
                                Riwayat
                            </Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#B5B5C3'
                            }}>
                                0 Rekomendasi
                            </Text>
                        </View>
                        <View style={styles.borderbtntambah}>
                            <TouchableOpacity>
                                <View style={styles.btnprodusen}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: '#FFFFFF'
                                        }}>Produsen</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.btnreseller}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: '#B5B5C3'
                                        }}>Reseller</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxheder}>
                        <Text style={{ fontSize: 10, marginLeft: 10 }}>NAMA PRODUK</Text>
                        <Text style={{ fontSize: 10, marginLeft: 'auto' }}>HASIL REKOMENDASI</Text>
                        <Text style={{ fontSize: 10, marginLeft: 'auto', paddingRight: 14 }}>AKSI</Text>
                    </View>
                    <View style={styles.boxitemhistori}>
                        <View>
                            <Text style={{ fontSize: 12 }}>Sepatu</Text>
                            <Text style={{ fontSize: 10, color: '#B5B5C3' }}>02-02-2021</Text>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12 }}>Rp</Text>
                                <Text style={{ fontSize: 12, marginLeft: 5 }}>0</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10, color: '#B5B5C3' }}>0</Text>
                                <Text style={{ fontSize: 10, color: '#B5B5C3', marginLeft: 5 }}>Pesaing</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                toDetailProduk();
                            }}
                            style={styles.boxbtnaksi}>
                            <Image
                                source={require('../assets/image/aksihistori.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginLeft: 'auto',
        width: 40,
        height: 43,
        backgroundColor: '#FFF',
        borderRadius: 3
    },
    boxheder: {
        marginTop: 24,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#F9F9FC'
    },
    opsi1: {
        width: 160,
        height: 75,
        backgroundColor: '#F68713',
        borderRadius: 11
    },
    opsi2: {
        width: 160,
        height: 75,
        backgroundColor: '#C4C4C4',
        borderRadius: 11,
        marginLeft: 'auto'
    },
    itemopsi: {
        width: 36,
        height: 36,
        backgroundColor: '#FFF',
        borderRadius: 3,
        alignItems: 'center',
        paddingTop: 5
    },
    itembp: {
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 12,
        backgroundColor: '#FEF8F3',
        borderRadius: 10
    },
    boxkalender: {
        flexDirection: 'row',
        marginTop: 14
    },
    boxbulan: {
        backgroundColor: '#464E5F',
        width: 88,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4
    },
    boxtahun: {
        backgroundColor: '#464E5F',
        marginLeft: 5,
        width: 61,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4
    },
    boxtambah: {
        flexDirection: 'column'
    },
    btnprodusen: {
        backgroundColor: '#333333',
        width: 64,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnreseller: {
        backgroundColor: '#FFF',
        width: 64,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    borderbtntambah: {
        backgroundColor: '#FFF',
        padding: 1,
        height: 28,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row'
    },
    boxitemhistori: {
        flexDirection: 'row',
        marginRight: 15,
        marginTop: 15
    },
    boxbtnaksi: {
        marginLeft: 'auto',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
});

export default Histori;