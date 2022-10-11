import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShadowView } from '@dotmind/rn-shadow-generator';

const HargaRekomendasi = () => {
    const [isSelected, setSelection] = useState(false)

    const [namatokoprod, setNamaTokoProd] = useState('');
    const [namaprodukprod, setNamaProdukProd] = useState('');
    const [hargaprodukprod, setHargaProdukProd] = useState('');
    const [listData, setListData] = useState([]);

    const dataPesaing = () => {
        let data = { nmtk: namaprodukprod, nmprod: namaprodukprod, harga: hargaprodukprod };
        setListData([...listData, data])
    }

    return (
        <View style={{ height: 'auto' }}>
            <View style={{
                backgroundColor: '#F68713',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                height: 80
            }}>
                <View style={{
                    flexDirection: 'row',
                    padding: 20
                }}>
                    <View style={styles.noip}>
                        <Text style={{ color: '#F68713' }}>3</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: 14
                    }}>
                        <Text style={styles.txt1}>Harga Rekomendasi</Text>
                        <Text style={styles.txt2}>Menentukan Harga Rekomendasi</Text>
                    </View>
                </View>
            </View>
            <ShadowView level={2} shadowColor={'#000'} direction={'bottom'}
                style={{ marginBottom: 20 }}>
                <View style={styles.boxnm}>
                    <Text style={{ color: '#B2B1B4', fontSize: 14 }}>Harga Pesaing</Text>
                    <Text style={{ color: '#4A4847', fontSize: 14, marginTop: 2 }}>Pencarian Harga E-commerce</Text>
                </View>
                <View style={{ marginLeft: 18, marginTop: 14 }}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text>Pilih Semua</Text>
                    </View>

                    <View style={{ flexDirection: 'column', paddingRight: 15 }}>
                        <View style={styles.boxitemscraping}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox1}
                            />
                            <Image
                                style={styles.logo}
                                source={require('../../assets/image/sepatu.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.txt9}>Sepatu</Text>
                                <Text style={styles.txt10}>Zalora</Text>
                            </View>
                            <View style={styles.boxharga}>
                                <Text style={styles.txt7}>Rp</Text>
                                <Text style={styles.txt8}>60.000</Text>
                            </View>
                        </View>
                        <View style={styles.boxitemscraping}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox1}
                            />
                            <Image
                                style={styles.logo}
                                source={require('../../assets/image/sepatu1.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.txt9}>Sepatu</Text>
                                <Text style={styles.txt10}>Blibli</Text>
                            </View>
                            <View style={styles.boxharga}>
                                <Text style={styles.txt7}>Rp</Text>
                                <Text style={styles.txt8}>65.000</Text>
                            </View>
                        </View>
                        <View style={styles.boxitemscraping}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox1}
                            />
                            <Image
                                style={styles.logo}
                                source={require('../../assets/image/sepatuvans.png')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.txt9}>Sepatu</Text>
                                <Text style={styles.txt10}>Zalora</Text>
                            </View>
                            <View style={styles.boxharga}>
                                <Text style={styles.txt7}>Rp</Text>
                                <Text style={styles.txt8}>70.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.boxnm1}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#B2B1B4', fontSize: 14 }}>Optional</Text>
                        <Text style={{ color: '#4A4847', fontSize: 14, marginTop: 2 }}>Tambah Pesaing</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.boxinp}>
                        <Text>Nama Toko</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(nmtoko) => setNamaTokoProd(nmtoko)}
                            value={namatokoprod}
                            placeholder="Masukan Nama Toko"
                        />
                    </View>
                    <View style={styles.boxinp}>
                        <Text>Nama Produk</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(nmproduk) => setNamaProdukProd(nmproduk)}
                            value={namaprodukprod}
                            placeholder="Masukan Nama Produk"
                        />
                    </View>
                </View>
                <View style={styles.boxinp}>
                    <Text>Harga Produk</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(hrproduk) => setHargaProdukProd(hrproduk)}
                        value={hargaprodukprod}
                        placeholder="Masukan Harga Produk"
                        keyboardType="numeric"
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    margin: 23
                }}>
                    <View style={styles.borderbtntambah}>
                        <TouchableOpacity onPress={() => {
                            dataPesaing();
                        }}>
                            <View

                                style={styles.btntambah}>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        color: '#F68713'
                                    }}>Tambah Pesaing</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.borderbtnsimpan}>
                        <TouchableOpacity >
                            <View

                                style={styles.btntambah}>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        color: '#F68713'
                                    }}>Simpan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={listData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'column', paddingRight: 15, marginLeft: 15 }}>
                            {console.log('item ', item.harga)}
                            <View style={styles.boxitemscraping}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox1}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                    <Text style={styles.txt9}>{item.nmtk}</Text>
                                    <Text style={styles.txt10}>{item.nmprod}</Text>
                                </View>
                                <View style={styles.boxharga}>
                                    <Text style={styles.txt7}>Rp</Text>
                                    <Text style={styles.txt8}>{item.harga}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <View style={{ marginLeft: 23, marginRight: 23, marginTop: 30, paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}>
                            Rekomendasi Harga
                        </Text>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                            <Text style={styles.txt5}>Rp</Text>
                            <Text style={styles.txt6}>0</Text>
                        </View>
                    </View>
                </View>
            </ShadowView>
        </View>
    );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    },
    checkbox1: {
        alignSelf: "center",
        marginLeft: 12
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 5
    },
    boxharga: {
        flexDirection: 'row',
        marginLeft: 'auto',
        height: 23,
        width: 67,
        backgroundColor: '#F68713',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 11
    },
    boxitemscraping: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 61,
        backgroundColor: '#F9F9FC',
        marginTop: 8,
        borderRadius: 6
    },
    boxinp: {
        marginLeft: 23,
        marginRight: 23,
        marginTop: 10
    },
    input: {
        height: 42,
        borderColor: '#ECF0F3',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 8,
        paddingLeft: 5
    },
    boxnm1: {
        flexDirection: 'row',
        marginLeft: 23,
        marginRight: 23,
        marginTop: 25
    },
    btntambah: {
        backgroundColor: '#FFF',
        width: 88,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    borderbtntambah: {
        backgroundColor: '#F68713',
        padding: 1,
        height: 28,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    borderbtnsimpan: {
        backgroundColor: '#F68713',
        padding: 1,
        height: 28,
        marginLeft: 'auto',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    noip: {
        backgroundColor: '#FFF',
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    txt1: {
        color: '#FFF',
        fontSize: 14
    },
    txt2: {
        color: '#FFD9B1',
        fontSize: 13
    },
    txt3: {
        color: '#FF9F24'
    },
    txt4: {
        color: '#FF9F24',
        paddingLeft: 5
    },
    txt5: {
        color: '#FF9F24',
        fontSize: 16,
        fontWeight: 'bold'
    },
    txt6: {
        color: '#FF9F24',
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    txt7: {
        color: '#FFF',
        fontSize: 10
    },
    txt8: {
        color: '#FFF',
        fontSize: 10,
        marginLeft: 2
    },
    txt9: {
        color: '#080F18',
        fontSize: 12,

    },
    txt10: {
        color: '#B5B5C3',
        fontSize: 10,

    },
    boxnm: {
        marginLeft: 23,
        marginTop: 31
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: 'center'
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default HargaRekomendasi;
