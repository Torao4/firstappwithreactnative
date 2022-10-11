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

const RiwayatDetailR = () => {

    const navigation = useNavigation();

    const toTambahBiayaProduksi = () => {
        navigation.navigate('TambahProduksi');
    };
    const toEditBiayaProduksi = () => {
        navigation.navigate('EditProduksi');
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
                    <Image
                        source={require('../assets/image/Iconkembali.png')}
                    />
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 14,
                        color: '#4A4847'
                    }}>Biaya Produksi</Text>
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
                                fontSize: 14,
                                color: '#080F18',
                                fontWeight: 'bold'
                            }}>
                                Data Biaya Produksi
                            </Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#B5B5C3'
                            }}>
                                Pesanan lebih dari 40 buku
                            </Text>
                        </View>
                        <View style={styles.borderbtntambah}>
                            <TouchableOpacity>
                                <View style={styles.btntambah}>
                                    <Text
                                        onPress={() => {
                                            toTambahBiayaProduksi();
                                        }}
                                        style={{
                                            fontSize: 10,
                                            color: '#F68713'
                                        }}>Tambah</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxkalender}>
                        <View style={styles.boxbulan}>
                            <Text style={{
                                color: '#FFF',
                                fontSize: 10
                            }}>Bulan</Text>
                            <Image
                                style={{ marginLeft: 'auto' }}
                                source={require('../assets/image/Iconkalender.png')}
                            />
                        </View>
                        <View style={styles.boxtahun}>
                            <Text style={{
                                color: '#FFF',
                                fontSize: 10
                            }}>Tahun</Text>
                            <Image
                                style={{ marginLeft: 'auto' }}
                                source={require('../assets/image/Iconkalender.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.boxheder}>
                        <Text>TANGGAL</Text>
                        <Text style={{ marginLeft: 'auto' }}>TOTAL BIAYA</Text>
                        <Text style={{ marginLeft: 'auto', paddingRight: 14 }}>AKSI</Text>
                    </View>
                    <View style={styles.boxitem}>
                        <Text>15</Text>
                        <Text style={{ marginLeft: 5 }}>September</Text>
                        <Text style={{ marginLeft: 'auto', }}>Rp</Text>
                        <Text style={{ marginLeft: 5 }}>0</Text>
                        <View style={styles.opsiitem}>
                            <TouchableOpacity
                                onPress={() => {
                                    toEditBiayaProduksi();
                                }}
                                style={styles.item}>
                                <Image
                                    source={require('../assets/image/Write.png')}

                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item2}>
                                <Image
                                    source={require('../assets/image/Trash.png')}
                                />
                            </TouchableOpacity>
                        </View>
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
        paddingBottom: 15
    },
    boxitem: {
        flexDirection: 'row',
    },
    opsiitem: {
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    item: {
        height: 32,
        width: 32,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item2: {
        height: 32,
        width: 32,
        borderRadius: 6,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
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
    btntambah: {
        backgroundColor: '#FFF',
        width: 64,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    borderbtntambah: {
        backgroundColor: '#F68713',
        padding: 1,
        height: 28,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
});

export default RiwayatDetailR;