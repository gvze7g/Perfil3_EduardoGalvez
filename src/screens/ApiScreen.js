import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';

import usePlanets from '../hooks/usePlanets';
import PlanetCard from '../components/PlanetCard';
import Loading from '../components/Loading';

export default function ApiScreen() {
  const {
    planets,
    loading,
    error,
    fetchPlanets,
  } = usePlanets();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          Ocurrió un error:
        </Text>

        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Planetas de Dragon Ball
      </Text>

      <FlatList
        data={planets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlanetCard planet={item} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchPlanets}
          />
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  list: {
    paddingBottom: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  error: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});