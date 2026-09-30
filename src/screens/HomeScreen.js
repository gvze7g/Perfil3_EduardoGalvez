import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación Móvil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.info}>Eduardo José Gálvez Benítez</Text>

        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.info}>20230315</Text>

        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.info}>A2</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dragon Ball')}
      >
        <Text style={styles.buttonText}>Ver planetas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    padding: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
  },

  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },

  info: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 3,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});