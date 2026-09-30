import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen.js';
import ApiScreen from './src/screens/ApiScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dragon Ball"
          component={ApiScreen}
          options={{ title: 'Planetas Dragon Ball' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}