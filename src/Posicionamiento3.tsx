import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Posicionamiento = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxPurple, styles.left]}></View>
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
    alignItems: 'flex-start', // Alinea en la parte izquierda
    backgroundColor: 'skyblue',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
  },
  left: {
    alignSelf: 'flex-start', // Alinea en la parte izquierda
  },
  boxPurple: {
    backgroundColor: 'purple',
  },
  boxOrange: {
    backgroundColor: 'orange',
  },
  boxGreen: {
    backgroundColor: 'green',
    width: '99%',
  },
});
