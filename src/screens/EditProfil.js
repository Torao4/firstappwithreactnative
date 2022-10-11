import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { ShadowView } from '@dotmind/rn-shadow-generator';

const EditProfil = () => {

    const [namausaha, setNamaUsaha] = useState('');
    const [namalengkap, setNamaLengkap] = useState('');
    const [nomor, setNomor] = useState('');
    const [password, setPassword] = useState('');

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
                        }}>Edit Profil</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#4A4847'
                        }}>UMKM MELATI</Text>
                    </View>
                </View>
            </View>
            <ShadowView level={8} shadowColor={'#000'} direction={'bottom'}
                style={styles.boxedit}>
                <View>
                    <Text>Edit Akun</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNamaUsaha(text)}
                        value={namausaha}
                        placeholder="Edit Nama Usaha"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNamaLengkap(text)}
                        value={namalengkap}
                        placeholder="Edit Nama Lengkap"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNomor(text)}
                        value={nomor}
                        placeholder="Nomor HP"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="Edit Password"
                    />
                    <TouchableOpacity style={styles.btnsimpan}>
                        <Text style={{ color: '#FFF' }}>
                            SIMPAN
                        </Text>
                    </TouchableOpacity>
                </View>
            </ShadowView>

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
    boxedit: {
        margin: 30,
        borderRadius: 10,
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#979797',
        marginTop: 20
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
    btnsimpan: {
        marginLeft: 'auto',
        height: 44,
        width: 110,
        backgroundColor: '#F68713',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 24,
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

export default EditProfil;