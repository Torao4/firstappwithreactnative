import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';

import { ShadowView } from '@dotmind/rn-shadow-generator';
import DropDownPicker from 'react-native-dropdown-picker';

const InitialPriceProdusen = () => {

    const [selectedBulan, setSelectedBulan] = useState('java');

    const pickerRef = useRef();


    const [biayaproduksi, setBiayaProduksi] = useState(0);
    const [hasilproduksi, setHasilProduksi] = useState(0);
    const [margin, setMargin] = useState(0);
    const [totalUnit, setTotalUnit] = useState(0);
    const [finalMargin, setFinalMargin] = useState(0)
    const [totalinitialPrice, setInitialPrice] = useState(0)

    const hitungUnit = (total) => {
        setHasilProduksi(total);
        let bp = 10000000;

        setBiayaProduksi(bp)

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
        <View style={{ height: 'auto' }}>
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
                    <Text style={styles.txt3}>Prediksi Harga</Text>
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
                            containerStyle={{ width: 100 }}
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
                            containerStyle={{ width: 90 }}
                            labelStyle={{ color: '#FFF' }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 14
                    }}>
                        <Text style={styles.txt4}>Berdasarkan Biaya Produksi bulan sebelumnya</Text>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Total Biaya Produksi</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <Text style={{
                                marginLeft: 5
                            }}>{biayaproduksi}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Total Unit Hasil Produksi</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(total) => hitungUnit(total)}
                            value={hasilproduksi}
                            placeholder="Masukan Total Unit Hasil Produksi"
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.txt5}>Harga Produksi/unit</Text>
                        <View style={styles.boxmargin1}>
                            <Text>Rp</Text>
                            <Text style={{
                                marginLeft: 5,
                            }}>{totalUnit}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.txt5}>Margin</Text>
                        <View style={styles.boxmargin}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(total) => setMarginFunc(total)}
                                value={margin}
                                placeholder="Masukan Margin"
                                keyboardType="numeric"
                            />
                            <Text style={{ fontSize: 16, marginLeft: 14, marginTop: 8 }}>
                                %
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30
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
        paddingBottom: 24
    },
    boxmargin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxmargin1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECF0F3',
        paddingLeft: 10,
        marginTop: 8,
        height: 40,
        borderRadius: 4
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
        fontSize: 14,
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
        flexDirection: 'row',
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
        width: 100,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4,
    },
    boxtahun: {
        backgroundColor: '#464E5F',
        marginLeft: 5,
        width: 80,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 4
    },
});

export default InitialPriceProdusen;

