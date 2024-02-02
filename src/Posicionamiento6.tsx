import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Posicionamiento = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxPurple, styles.topRight, styles.purplePosition]}></View>
      <View style={[styles.box, styles.boxOrange, styles.topRight, styles.orangePosition]}></View>
      <View style={[styles.box, styles.boxGreen, styles.topRight, styles.greenPosition]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'skyblue',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  topRight: {
    position: 'absolute',
  },
  boxPurple: {
    backgroundColor: 'purple',
  },
  boxOrange: {
    backgroundColor: 'orange',
    height: '100%',
  },
  boxGreen: {
    backgroundColor: 'green',
  },
  purplePosition: {
    top: 0,
  },
  orangePosition: {
    top: 110,
  },
  greenPosition: {
    bottom: 0, // Ajusta la posición vertical para que la caja verde esté en la parte más baja
    //esta cosa es lo maximo 
  }, 
});
