import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, NextDays } from '../screens'

const Stack = createNativeStackNavigator()

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='nextDays' component={NextDays} />
  </Stack.Navigator>
)

export default NavigationStack
