import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ShadowView } from '@dotmind/rn-shadow-generator';

const InitialPriceProdusen = () => {
    const navigation = useNavigation();

    const [margin, setMargin] = useState(0);
    const [hargaunit, setHargaUnit] = useState(0);
    const [finalMargin, setFinalMargin] = useState(0)
    const [totalinitialPrice, setInitialPrice] = useState(0)

    const setMarginFunc = (margin) => {
        setMargin(margin);

        let a = Number(margin);
        let b = Number(hargaunit);

        let tempMargin = a / 100;
        let totalmargin = Number(b * tempMargin)
        setFinalMargin(totalmargin)

        let totalip = b + totalmargin
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
                        <Text style={styles.txt2}>Mencari Initial Price</Text>
                    </View>
                </View>
            </View>
            <ShadowView level={2} shadowColor={'#000'} direction={'bottom'}>
                <View style={styles.boxip}>
                    <View>
                        <Text style={styles.txt5}>Harga Pokok /Unit</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <TextInput
                                style={styles.input1}
                                onChangeText={(total) => setHargaUnit(total)}
                                value={hargaunit}
                                placeholder="Masukan harga per unit"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Margin</Text>
                        <View style={styles.boxmargin}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(total) => setMarginFunc(total)}
                                value={margin}
                                placeholder="Masukan margin"
                                keyboardType="numeric"
                            />
                            <Text style={{
                                fontSize: 16, marginLeft: 14, marginTop: 8
                            }}>
                                %
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 40
                    }}>
                        <Text style={styles.txt6}>Margin yang diperoleh</Text>
                        <View style={styles.txt7}>
                            <Text style={styles.txt8}>Rp</Text>
                            <Text style={styles.txt8}>{finalMargin}</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 14
                    }}>
                        <Text style={styles.txt9}>Initial Price</Text>
                        <View style={styles.txt7}>
                            <Text style={styles.txt10}>Rp</Text>
                            <Text style={styles.txt10}>{totalinitialPrice}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            tostep2();
                        }}
                        style={{
                            marginLeft: 'auto'
                        }}>
                        {/* <View
                        style={styles.btnlanjut}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: 13
                        }}>LANJUT</Text>
                    </View> */}
                    </TouchableOpacity>
                </View>
            </ShadowView>
        </View>
    );
}


const styles = StyleSheet.create({
    input1: {
        marginLeft: 5
    },
    input: {
        height: 42,
        borderColor: '#ECF0F3',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 8
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
        marginLeft: 23,
        marginRight: 23,
        marginBottom: 20
    },
    boxmargin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxmargin1: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        borderColor: '#ECF0F3',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 8,
        paddingLeft: 10
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
        color: '#4A4847',
        marginTop: 20,

    },
    txt6: {
        color: '#999999',
        fontSize: 12
    },
    txt7: {
        color: '#FF9F24',
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    txt8: {
        color: '#FF9F24',
        fontSize: 12
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

export default InitialPriceProdusen;

