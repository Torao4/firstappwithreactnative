import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const heightByScreen = percent =>
    (percent / 100) * Dimensions.get('window').height;

export const widthByScreen = percent =>
    (percent / 100) * Dimensions.get('window').width;