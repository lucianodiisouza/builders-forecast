import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, NextDays } from '../screens'
import { Pressable } from 'react-native'
import { Icon } from '../components'
import { AppColors } from '../theme/GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NextDays'
        component={NextDays}
        options={{
          headerTitle: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name='arrow-left' size={32} color={AppColors.DARK_BLUE} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default NavigationStack
