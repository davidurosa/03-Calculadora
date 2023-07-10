/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto:string) => void;
}

export const BotonCal = ({texto, color = '#20203B', ancho = false,accion}: Props) => {
  return (
    <TouchableNativeFeedback  onPress={()=>accion(texto)} background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.5)', false, 40)}>

    <View
      style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 170 : 80,
      }}>
      <Text
        style={{
          ...styles.botonTexto,
          color: color === '#95afc0' ? 'black' : 'white',
        }}>
        {texto}
      </Text>
    </View>
    </TouchableNativeFeedback>
  );
};
