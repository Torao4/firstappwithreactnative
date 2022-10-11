import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { ShadowView } from '@dotmind/rn-shadow-generator';

const HargaRekomendasiHistori = () => {
    const [isSelected, setSelection] = useState(false)

    return (
        <View>
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
                        <Text style={{ color: '#F68713' }}>2</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: 14
                    }}>
                        <Text style={styles.txt1}>Harga Rekomendasi</Text>
                        <Text style={styles.txt2}>21-10-2021</Text>
                    </View>
                </View>
            </View>

            <ShadowView level={2} shadowColor={'#000'} direction={'bottom'}
                style={{ marginBottom: 10, paddingBottom: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>

                {/* <FlatList
                data={listData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'column', paddingRight: 15, marginLeft: 15 }}>
                        {console.log('item ', item.harga)}
                        <View style={styles.boxitemscraping}>
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
            /> */}

                <View style={{ marginLeft: 23, marginRight: 23, marginTop: 50 }}>
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <Text style={{ color: '#333333', fontSize: 16 }}>
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
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    boxinp: {
        marginLeft: 23,
        marginTop: 25
    },
    boxnm1: {
        flexDirection: 'row',
        marginLeft: 23,
        marginRight: 23
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
        marginLeft: 'auto',
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
        fontSize: 16
    },
    txt6: {
        color: '#FF9F24',
        paddingLeft: 5,
        fontSize: 16
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

export default HargaRekomendasiHistori;
