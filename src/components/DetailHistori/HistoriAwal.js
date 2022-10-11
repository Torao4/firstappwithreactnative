import React, { useRef, useCallback, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InitialPriceHistori from './InitialPriceHistori';
import HargaRekomendasiHistori from './HargaRekomendasiHistori';

import { widthByScreen } from '../../utils';

const HistoriAwal = () => {
    const navigation = useNavigation();
    const refFlatList = useRef();

    const [activeIndicator, setActiveIndicator] = useState(0);

    const slides = [
        {
            view: <InitialPriceHistori />,
        },
        {
            view: <HargaRekomendasiHistori />,
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
            height: '100%',
            paddingLeft: 32,
            paddingRight: 32
        }}>
            {/* <Text>JEJEJEJE {index}</Text> */}
            {item.view}
        </View>
    )

    return (
        <View>
            <FlatList
                ref={refFlatList}
                data={slides}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={_renderItem}
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
                                }}>SELESAI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : (
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

export default HistoriAwal;
