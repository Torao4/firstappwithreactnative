import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';

import { ShadowView } from '@dotmind/rn-shadow-generator';

const InitialPriceHistori = () => {

    const [biayaproduksi, setBiayaProduksi] = useState(0);
    const [hasilproduksi, setHasilProduksi] = useState(0);
    const [margin, setMargin] = useState(0);
    const [totalUnit, setTotalUnit] = useState(0);
    const [finalMargin, setFinalMargin] = useState(0)
    const [totalinitialPrice, setInitialPrice] = useState(0)

    const hitungUnit = (total) => {
        setHasilProduksi(total);

        setTotalUnit(biayaproduksi / total);
    }

    const setMarginFunc = (margin) => {
        setMargin(margin);

        let tempMargin = margin / 100;
        let totalFinal = totalUnit * tempMargin
        setFinalMargin(totalFinal)

        let totalip = totalUnit + totalFinal
        setInitialPrice(totalip)
    }

    return (
        <View>
            <View style={{
                backgroundColor: '#F68713',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                height: 80,
            }}>
                <View style={{
                    flexDirection: 'row',
                    padding: 20
                }}>
                    <View style={styles.noip}>
                        <Text style={{ color: '#F68713' }}>1</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: 14
                    }}>
                        <Text style={styles.txt1}>Initial Price</Text>
                        <Text style={styles.txt2}>19-09-2021</Text>
                    </View>
                </View>
            </View>
            <ShadowView level={2} shadowColor={'#000'} direction={'bottom'}
                style={{ marginBottom: 10, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
                <View style={styles.boxip}>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 14
                    }}>
                        <Text style={styles.txt4}>Berdasarkan Biaya Produksi bulan sebelumnya</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 24 }}>
                        <Text style={styles.txt5}>Total Biaya Produksi</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <Text>0</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.txt5}>Total Unit Hasil Produksi</Text>
                        <View style={styles.boxmargin1}>
                            <Text>0</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.txt5}>Harga Produksi/unit</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <Text>0</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.txt5}>Margin</Text>
                        <View style={styles.boxmargin1}>
                            <Text>0</Text>
                            <Text>%</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 40
                    }}>
                        <Text style={styles.txt6}>Margin yang diperoleh</Text>
                        <View style={styles.txt7}>
                            <Text style={styles.txt8}>Rp</Text>
                            <Text style={styles.txt8}>0</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 14
                    }}>
                        <Text style={styles.txt9}>Initial Price</Text>
                        <View style={styles.txt7}>
                            <Text style={styles.txt10}>Rp</Text>
                            <Text style={styles.txt10}>0</Text>
                        </View>
                    </View>
                </View>
            </ShadowView>
        </View>
    );
}


const styles = StyleSheet.create({
    input1: {
        marginLeft: 5
    },
    btnlanjut: {
        backgroundColor: '#F68713',
        width: 110,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 40
    },
    noip: {
        backgroundColor: '#FFF',
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    boxip: {
        margin: 23,
    },
    boxmargin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxmargin1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
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
        marginTop: 21,
        color: '#080F18',
        fontSize: 12,
        fontWeight: 'bold'
    },
    txt4: {
        color: '#979797'
    },
    txt5: {
        color: '#979797',
        fontWeight: 'bold'
    },
    txt6: {
        fontSize: 14
    },
    txt7: {
        color: '#FF9F24',
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    txt8: {
        color: '#FF9F24',
        fontSize: 14
    },
    txt9: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txt10: {
        color: '#FF9F24',
        fontSize: 14,
        fontWeight: 'bold'
    },
    boxkalender: {
        flexDirection: 'row',
        marginTop: 8
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
});

export default InitialPriceHistori;

