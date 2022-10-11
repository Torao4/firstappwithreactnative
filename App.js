import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeProdusen from './src/screens/HomeProdusen';
import BiayaProduksi from './src/screens/BiayaProduksi/BiayaProduksi';
import TambahProduksi from './src/screens/BiayaProduksi/TambahProduksi';
import EditProduksi from './src/screens/BiayaProduksi/EditProduksi';
import SplashScreen from './src/screens/SplashScreen';
import BottomNav from './src/screens/BottomNav';
import RiwayatDetailP from './src/screens/RiwayatDetailP';
import RiwayatDetailR from './src/screens/RiwayatDetailR';
import Histori from './src/screens/Histori';
import EditProfil from './src/screens/EditProfil';

// import store from './src/redux';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={HomeProdusen} />
          <Stack.Screen name="BiayaProduksi" component={BiayaProduksi} />
          <Stack.Screen name="TambahProduksi" component={TambahProduksi} />
          <Stack.Screen name="EditProduksi" component={EditProduksi} />
          <Stack.Screen name="BottomNav" component={BottomNav} />
          <Stack.Screen name="Histori" component={Histori} />
          <Stack.Screen name="EditProfil" component={EditProfil} />
          <Stack.Screen name="RiwayatDetailProduk" component={RiwayatDetailP} />
          <Stack.Screen name="RiwayatDetailResaler" component={RiwayatDetailR} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
