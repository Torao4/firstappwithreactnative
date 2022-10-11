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
import HistoriAwal from '../components/DetailHistori/HistoriAwal';

const RiwayatDetailP = () => {

    const navigation = useNavigation();

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
                    }}>Detail Simulasi</Text>
                    <Image
                        style={styles.logo}
                        source={require('../assets/image/logohome.png')}
                    />
                </View>
            </View>
            <View>
                <Text style={{
                    color: '#080F18',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginTop: 30,
                    marginLeft: 32
                }}>
                    Detail Simulasi Harga Jual
                </Text>
                <View style={{ marginTop: 10 }}>
                    <HistoriAwal />
                </View>
            </View>
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

export default RiwayatDetailP;