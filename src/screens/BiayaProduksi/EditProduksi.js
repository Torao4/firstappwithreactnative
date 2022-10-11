import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

const EditProduksi = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Januari', value: 'Januari' },
        { label: 'Februari', value: 'Februari' },
        { label: 'Maret', value: 'Maret' },
        { label: 'April', value: 'April' },
        { label: 'Mei', value: 'Mei' },
        { label: 'Juni', value: 'Juni' },
        { label: 'Juli', value: 'Juli' },
        { label: 'Agustus', value: 'Agustus' },
        { label: 'September', value: 'September' },
        { label: 'Oktober', value: 'Oktober' },
        { label: 'November', value: 'November' },
        { label: 'Desember', value: 'Desember' },
    ]);
    const [yearOpen, setYearOpen] = useState(false);
    const [yearValue, setYearValue] = useState(null);
    const [years, setYears] = useState([])

    useEffect(() => {
        let year = new Date().getFullYear();
        let i = year - 10;
        let y = []
        for (let index = i; index <= year; index++) {
            y.push({ label: index, value: index })
        }
        setYears(y)
        console.log('years ', y);
    }, [])

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
                        source={require('./../../assets/image/Iconkembali.png')}
                    />
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 14,
                        color: '#4A4847'
                    }}>Form Edit</Text>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/image/logohome.png')}
                    />
                </View>
            </View>
            <View style={{
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
                                Form Edit Biaya Produksi
                            </Text>
                            <View style={styles.garis}></View>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: '#080F18',
                        marginTop: 24,
                        fontWeight: 'bold'
                    }}>
                        Pilih Bulan
                    </Text>
                    <View style={styles.boxkalender}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            onPress={(open, index) => console.log('was the picker open?', open)}
                            style={styles.boxbulan}
                            textStyle={{ color: '#000 ' }}
                            containerStyle={{ width: 110 }}
                            labelStyle={{ color: '#fff' }}
                        />
                        <DropDownPicker
                            open={yearOpen}
                            value={yearValue}
                            items={years}
                            setOpen={setYearOpen}
                            setValue={setYearValue}
                            setItems={setYears}
                            onPress={(open, index) => console.log('was the picker open?', open)}
                            style={styles.boxtahun}
                            textStyle={{ color: '#000 ' }}
                            containerStyle={{ width: 100 }}
                            labelStyle={{ color: '#FFF' }}
                        />
                    </View>
                    <View>
                        <Text style={styles.txt5}>Biaya Bahan</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={Text}
                                value={Text}
                                placeholder="Masukan Biaya Bahan"
                                keyboardType="text"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Biaya Pemasaran</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={Text}
                                value={Text}
                                placeholder="Masukan Biaya Pemasaran"
                                keyboardType="text"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Biaya Transportasi</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={Text}
                                value={Text}
                                placeholder="Masukan Biaya Transportasi"
                                keyboardType="text"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Biaya Listrik & Air</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={Text}
                                value={Text}
                                placeholder="Masukan Biaya Listrik & Air"
                                keyboardType="text"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Biaya Lainnya</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={Text}
                                value={Text}
                                placeholder="Masukan Biaya Lainnya"
                                keyboardType="text"
                            />
                        </View>
                    </View>
                    <View style={styles.boxtotal} >
                        <Text style={styles.txttotal}>
                            Total Biaya
                        </Text>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                            <Text style={styles.rptotal}>Rp</Text>
                            <Text style={styles.total}>0</Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 'auto',
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity style={styles.btnkembali}>
                            <Text style={{
                                color: '#F68713',
                                fontSize: 13
                            }}>BATAL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnlanjut}>
                            <Text style={{
                                color: '#FFF',
                                fontSize: 13
                            }}>SIMPAN</Text>
                        </TouchableOpacity>
                    </View>
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
    txt5: {
        color: '#4A4847',
        marginTop: 20,
        fontWeight: 'bold'
    },
    input1: {
        marginLeft: 5
    },
    btnlanjut: {
        backgroundColor: '#F68713',
        width: 110,
        height: 43,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 40
    },
    btnkembali: {
        backgroundColor: '#FFF',
        width: 110,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 40
    },
    boxmargin1: {
        flexDirection: 'row',
        alignItems: 'center'
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
        marginTop: 8
    },
    boxtanggal: {
        backgroundColor: '#464E5F',
        width: 48,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4
    },
    boxbulan: {
        backgroundColor: '#464E5F',
        width: 110,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4,
    },
    boxtahun: {
        backgroundColor: '#464E5F',
        marginLeft: 4,
        width: 90,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4
    },
    garis: {
        width: 81,
        height: 3,
        backgroundColor: '#F68713',
        borderRadius: 2,
        marginTop: 4
    },
    boxtotal: {
        flexDirection: 'row',
        marginTop: 40
    },
    txttotal: {
        fontSize: 14,
        color: '#333333',
        fontFamily: 'Poppins'
    },
    rptotal: {
        fontSize: 14,
        color: '#FF9F24',
        fontFamily: 'Poppins'
    },
    total: {
        fontSize: 14,
        color: '#FF9F24',
        marginLeft: 5,
        fontFamily: 'Poppins'
    }
});


export default EditProduksi;