// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// export const Posicionamiento = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.boxPurple}></View>
//       <View style={styles.boxOrange}></View>
//       <View style={styles.boxGreen}></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//   },

//   boxPurple: {
//     position: 'absolute',
//     left: 0,
//     width: 100,
//     height: 100,
//     backgroundColor: 'purple',
//   },

//   boxOrange: {
//     position: 'absolute',
//     left: 0,
//     width: 100,
//     height: 100,
//     backgroundColor: 'orange',
//     top: 150, // Agregué un valor top para ajustar la posición vertical
//   },

//   boxGreen: {
//     position: 'absolute',
//     left: 0,
//     width: 100,
//     height: 100,
//     backgroundColor: 'green',
//     top: 300, // Ajusta según tus necesidades
//   },
// });
// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// export const Posicionamiento = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, styles.boxPurple]}>
//         <View style={styles.innerBox}></View>
//       </View>
//       <View style={[styles.box, styles.boxOrange]}>
//         <View style={styles.innerBox}></View>
//       </View>
//       <View style={[styles.box, styles.boxGreen]}>
//         <View style={styles.innerBox}></View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
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
//   innerBox: {
//     flex: 1,
//   },
//   boxPurple: {
//     backgroundColor: 'purple',
//   },
//   boxOrange: {
//     backgroundColor: 'orange',
//     top: 40, // Ajusta la posición vertical según tus necesidades
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
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'skyblue',
  },
  box: {
    flex: 2, 
    width: '100%', 
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    margin: 0,
  },
  innerBox: {
    flex: 2,
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

