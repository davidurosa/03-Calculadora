import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCal} from '../components/BotonCal';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    numeroAnterior,
    numero,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/*Fila de botones  */}
      <View style={styles.fila}>
        <BotonCal texto="C" color="#E4413E" accion={limpiar} />
        <BotonCal texto="+/-" color="#E4413E" accion={positivoNegativo} />
        <BotonCal texto="del" color="#E4413E" accion={btnDelete} />
        <BotonCal texto="/" color="#FF8B41" accion={btnDividir} />
      </View>
      {/*Fila de botones  */}
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="X" color="#FF8B41" accion={btnMultiplicar} />
      </View>
      {/*Fila de botones  */}
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#FF8B41" accion={btnRestar} />
      </View>
      {/*Fila de botones  */}
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#FF8B41" accion={btnSumar} />
      </View>
      {/*Fila de botones  */}
      <View style={styles.fila}>
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" accion={calcular} />
      </View>
    </View>
  );
};
