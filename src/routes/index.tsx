import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, NextDays } from '../screens'

const Stack = createNativeStackNavigator()

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='NextDays' component={NextDays} />
  </Stack.Navigator>
)

export default NavigationStack
