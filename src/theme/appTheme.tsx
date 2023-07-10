import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#0D0A1A',
  },

  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },

  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: '#5A5A89',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    color: 'white',
  },
});
