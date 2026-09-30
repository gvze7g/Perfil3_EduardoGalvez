import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PlanetCard({ planet }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: planet.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{planet.name}</Text>

        <Text style={styles.description}>
          {planet.description}
        </Text>

        <Text style={styles.detail}>
          Estado: {planet.isDestroyed ? 'Destruido' : 'Activo'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 180,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  detail: {
    marginTop: 10,
    fontWeight: '600',
  },
});