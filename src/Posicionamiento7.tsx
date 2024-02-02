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
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  boxPurple: {
    backgroundColor: 'purple',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  boxOrange: {
    backgroundColor: 'orange',
  },
  boxGreen: {
    backgroundColor: 'green',
    position: 'absolute',
    bottom: '3%',
    right: 0,
  },
});
