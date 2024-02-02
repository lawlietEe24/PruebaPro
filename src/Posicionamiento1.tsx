import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Posicionamiento = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxPurple]}>
        <View style={styles.innerBox}></View>
      </View>
      <View style={[styles.box, styles.boxOrange]}>
        <View style={styles.innerBox}></View>
      </View>
      <View style={[styles.box, styles.boxGreen]}>
        <View style={styles.innerBox}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'skyblue',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    margin: 0,
  },
  innerBox: {
    flex: 1,
  },
  boxPurple: {
    backgroundColor: 'purple',
  },
  boxOrange: {
    backgroundColor: 'orange',
    top: '10%'
    
  },
  boxGreen: {
    backgroundColor: 'green',
  },
});
