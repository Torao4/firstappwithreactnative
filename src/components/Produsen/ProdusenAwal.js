import React, { useRef, useCallback, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InitialPriceProdusen from './InitialPriceProdusen';
import HargaPembanding from './HargaPembanding';
import HargaRekomendasi from './HargaRekomendasi';

import { heightByScreen, widthByScreen } from '../../utils';

const ProdusenAwal = () => {
    const navigation = useNavigation();
    const refFlatList = useRef();

    const toRiwayat = () => {
        navigation.navigate('Histori');
    };
    const toHome = () => {
        navigation.navigate('Home');
    };

    const [activeIndicator, setActiveIndicator] = useState(0);

    const slides = [
        {
            view: <InitialPriceProdusen />
        },
        {
            view: <HargaPembanding />
        },
        {
            view: <HargaRekomendasi />
        },
    ];

    const _handleDone = useCallback(async () => {
        navigation.replace('BottomNav');
    }, [navigation]);

    const _scrollNext = useCallback(() => {
        refFlatList.current.scrollToOffset({
            offset: (activeIndicator + 1) * widthByScreen(100),
        });
        setActiveIndicator(activeIndicator + 1);
    }, [activeIndicator]);

    const _handleBack = useCallback(() => {
        refFlatList.current.scrollToOffset({
            offset: (activeIndicator - 1) * widthByScreen(100),
        });
        setActiveIndicator(activeIndicator - 1);
    }, [activeIndicator])

    const _renderItem = ({ item, index }) => (
        <View style={{
            width: widthByScreen(100),
            paddingLeft: 32,
            paddingRight: 32,
        }}>
            {item.view}
        </View>
    )

    return (
        <View style={{
            flex: 1
        }}>
            <FlatList
                ref={refFlatList}
                data={slides}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={_renderItem}
                contentContainerStyle={{ flexGrow: 1, height: activeIndicator === 0 ? heightByScreen(71) : activeIndicator === 1 ? heightByScreen(45) : 'auto' }}
                scrollEnabled={false}
            />
            <View style={{ flexDirection: 'row', marginLeft: 'auto', }}>
                {activeIndicator > 0 &&
                    <TouchableOpacity
                        onPress={_handleBack}>
                        <View style={{
                            marginBottom: 32
                        }}>
                            <View style={styles.btnkembali}>
                                <Text style={{
                                    color: '#C4C4C4',
                                    fontSize: 13
                                }}>KEMBALI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
                {activeIndicator === slides.length - 1 ? (
                    <TouchableOpacity
                        onPress={() =>
                            Alert.alert('Penting', 'ini adalah hasil yang anda cari Rp apakah anda mau menyimpan data ini?', [
                                {
                                    text: 'Ulang',
                                    onPress: () => toHome(),
                                    style: 'ulang',
                                },
                                {
                                    text: 'Simpan',
                                    onPress: () => toRiwayat(),
                                }
                            ])}>
                        <View style={{
                            marginLeft: 'auto',
                            marginRight: 32,
                            marginBottom: 32
                        }}>
                            <View style={styles.btnlanjut}>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 13
                                }}>SELESAI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : activeIndicator === 1 ? (
                    <TouchableOpacity
                        onPress={_scrollNext}>
                        <View style={{
                            marginLeft: 'auto',
                            marginRight: 32,
                            marginBottom: 32
                        }}>
                            <View style={styles.btnlanjut}>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 13
                                }}>PROSES</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={_scrollNext}>
                        <View style={[styles.btnlanjut, {
                            marginRight: 32,
                            marginBottom: 32
                        }]}>
                            <View>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 13
                                }}>LANJUT</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnlanjut: {
        backgroundColor: '#F68713',
        width: 110,
        height: 43,
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

});

export default ProdusenAwal;
