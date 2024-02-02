// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// export const Posicionamiento = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, styles.boxPurple]}></View>
//       <View style={[styles.box, styles.boxOrange]}></View>
//       <View style={[styles.box, styles.boxGreen]}></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row', // Cambiado a 'row' para alinear las cajas en una fila 
//     justifyContent: 'space-around', // Alineadas con espacio alrededor
//     alignItems: 'flex-start', // Alineadas en la parte superior  
//     flex: 1,
//     backgroundColor: 'skyblue',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: 'white',
//     margin: 0,
//   },
//   boxPurple: {
//     backgroundColor: 'purple',
//   },
//   boxOrange: {
//     backgroundColor: 'orange',
//   },
//   boxGreen: {
//     backgroundColor: 'green',
//   },
// });
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
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between', //espacio entre papi 
    backgroundColor: 'skyblue',
    paddingHorizontal: 20, // Aumentado el espacio horizontal ponte pilas
  },
  box: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 10, // Aumentado el espacio horizontal
  },
  boxPurple: {
    backgroundColor: 'purple',
  },
  boxOrange: {
    backgroundColor: 'orange',
  },
  boxGreen: {
    backgroundColor: 'green',
  },
});
