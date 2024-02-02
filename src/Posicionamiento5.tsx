import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Posicionamiento = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxPurple]}></View>
      <View style={[styles.box, styles.boxOrange]}></View>
      <View style={[styles.box, styles.boxGreen]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    margin: 0, // Elimina el margen entre las cajas
  },
  boxPurple: {
    backgroundColor: 'purple',
  },
  boxOrange: {
    backgroundColor: 'orange',
    marginLeft: '50%', 
  },
  boxGreen: {
    backgroundColor: 'green',
  },
});
