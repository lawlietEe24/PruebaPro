
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const NumerosList = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [pares, setPares] = useState([]);
  const [impares, setImpares] = useState([]);
  const [clasificados, setClasificados] = useState(false);

  const clasificarNumeros = () => {
    const paresArray = numeros.filter((numero) => numero % 2 === 0);
    const imparesArray = numeros.filter((numero) => numero % 2 !== 0);

    setPares(paresArray);
    setImpares(imparesArray);
    setClasificados(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenidos}>Bienvenidos</Text>

      <Text style={styles.numerosVector}>{numeros.join(', ')}</Text>

      <Button title="Clasificar Números" onPress={clasificarNumeros} />

      {clasificados && (
        <View style={styles.resultadosContainer}>
          <View style={styles.paresContainer}>
            <Text style={styles.resultadosTitulo}>Números Pares:</Text>
            <Text>{pares.join(', ')}</Text>
          </View>

          <View style={styles.imparesContainer}>
            <Text style={styles.resultadosTitulo}>Números Impares:</Text>
            <Text>{impares.join(', ')}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default NumerosList;
