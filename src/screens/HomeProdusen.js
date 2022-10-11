import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Initialprice from '../components/Produsen/InitialPriceProdusen';
import ProdusenAwal from '../components/Produsen/ProdusenAwal';
import ResellerAwal from '../components/Reseller/ResellerAwal';
import { ShadowView } from '@dotmind/rn-shadow-generator';

const HomeProdusen = () => {
    const navigation = useNavigation();

    const [statusSeller, setReseller] = useState(false);

    const toBiayaProduksi = () => {
        navigation.navigate('BiayaProduksi');
    };

    return (
        <View style={{
            backgroundColor: '#FFF',
            height: '100%'
        }}>
            <View style={{
                height: 154,
                backgroundColor: '#FAB80A',
                borderBottomEndRadius: 30,
                borderBottomStartRadius: 30,
                zIndex: 999
            }}>
                <View style={{ flexDirection: 'column', marginTop: 21 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 32, paddingRight: 32 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{
                                marginTop: 21,
                                fontSize: 14,
                                color: '#FFF'
                            }}>Selamat Datang</Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#4A4847',
                                marginTop: 6
                            }}>UMKM MELATI</Text>
                        </View>
                        <Image
                            style={styles.logo}
                            source={require('../assets/image/logohome.png')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 32, paddingRight: 32, marginTop: 21 }}>
                        <TouchableOpacity style={[styles.opsi1, , { backgroundColor: !statusSeller ? '#F68713' : '#C4C4C4' }]} onPress={() => setReseller(false)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 19 }}>
                                <View style={styles.itemopsi}>
                                    <Image
                                        source={require('../assets/image/produsen.png')}
                                    />
                                </View>
                                <Text style={{
                                    marginLeft: 10,
                                    color: '#FFF',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}>
                                    Produsen
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.opsi2, { backgroundColor: statusSeller ? '#F68713' : '#C4C4C4' }]} onPress={() => setReseller(true)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 19 }}>
                                <View style={styles.itemopsi}>
                                    <Image
                                        source={require('../assets/image/reseller.png')}
                                    />
                                </View>
                                <Text style={{
                                    marginLeft: 10,
                                    color: '#FFF',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}>
                                    Reseller
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                {!statusSeller &&
                    <>
                        <Text style={{
                            fontSize: 14,
                            color: '#080F18',
                            fontWeight: 'bold',
                            marginTop: 50,
                            marginLeft: 32
                        }}>
                            Perbarui Biaya Produksimu
                        </Text>
                        <TouchableOpacity style={styles.itembp}
                            onPress={() => {
                                toBiayaProduksi();
                            }}>
                            <View style={{
                                backgroundColor: '#FFD9B1',
                                paddingTop: 10,
                                paddingLeft: 10,
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10
                            }}>
                                <Image
                                    source={require('../assets/image/bp.png')}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        color: '#4A4847',
                                        marginTop: 20,
                                        marginLeft: 20
                                    }}>Biaya Produksi</Text>
                                <Text style={{
                                    fontSize: 10,
                                    color: '#080F18',
                                    marginTop: 2,
                                    marginLeft: 20
                                }}>Tambahkan catatan biaya</Text>
                                <Text style={{
                                    fontSize: 10,
                                    color: '#080F18',
                                    marginLeft: 20
                                }}>produksimu setiap bulan</Text>
                            </View>
                            <View style={{
                                marginLeft: 'auto',
                                backgroundColor: '#4A4847',
                                width: 24,
                                height: 24,
                                alignItems: 'center',
                                marginTop: 50,
                                paddingTop: 6,
                                borderRadius: 12,
                                marginRight: 11
                            }}>
                                <Image

                                    source={require('../assets/image/Iconoval.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </>
                }

                <Text style={{
                    color: '#080F18',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginTop: statusSeller ? 50 : 30,
                    marginLeft: 32
                }}>
                    Simulasi Harga Jual
                </Text>
                <View style={{ marginTop: 10 }}>
                    {statusSeller ?
                        <ResellerAwal />
                        :
                        <ProdusenAwal />
                    }
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    logo: {
        marginLeft: 'auto',
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 3,
        marginTop: 21
    },
    opsi1: {
        width: 160,
        height: 75,
        borderRadius: 11
    },
    opsi2: {
        width: 160,
        height: 75,
        borderRadius: 11,
        marginLeft: 'auto',
        zIndex: 999,
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
    }
});

export default HomeProdusen;