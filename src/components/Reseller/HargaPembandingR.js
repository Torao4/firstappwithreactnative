import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ShadowView } from '@dotmind/rn-shadow-generator';

const HargaPembandingR = () => {
    const [isSelected, setSelection] = useState(false)

    const [namaprodukres, setNamaProdukRes] = useState()

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
                        <Text style={styles.txt1}>Harga Pembanding</Text>
                        <Text style={styles.txt2}>Mencari Harga Pembanding</Text>
                    </View>
                </View>
            </View>
            <ShadowView level={2} shadowColor={'#000'} direction={'bottom'}>
                <View style={styles.boxinp}>
                    <Text>Nama Produk</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(nmprodukres) => setNamaProdukRes(nmprodukres)}
                        value={namaprodukres}
                        placeholder="Masukan Nama Produk"
                    />
                </View>
                <View style={styles.boxopsi}>
                    <Text style={styles.txt3}>Harga Produk E-commerce</Text>
                    <View style={{ marginTop: 18 }}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text>Pilih Semua</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Shopee</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Tokopedia</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Bukalapak</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Blili</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Lazada</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text>Zalora</Text>
                                </View>
                            </View>
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
        alignItems: 'center'
    },
    checkbox: {
        alignSelf: "center",
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
        color: '#4A4847',
        fontSize: 14
    },
    boxinp: {
        marginLeft: 23,
        marginTop: 31
    },
    boxopsi: {
        marginLeft: 23,
        marginTop: 24
    }
});

export default HargaPembandingR;
