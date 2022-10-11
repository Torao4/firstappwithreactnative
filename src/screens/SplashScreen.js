//package import here
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    //logic value here
    const navigation = useNavigation();

    //place your extension component here
    useEffect(() => {
        setTimeout(async () => {
            const email = await AsyncStorage.getItem('email')
            console.log('email', email);
            if (email !== null) {
                navigation.navigate('BottomNav')
            } else {
                navigation.navigate('Login')
            }
        }, 3000)
    })

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/image/Logom.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAB80A'
    },
});



export default SplashScreen;
