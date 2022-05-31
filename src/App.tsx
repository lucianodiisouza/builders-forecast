import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RootSiblingParent } from 'react-native-root-siblings'

import NavigationStack from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <StatusBar style='light' />
        <NavigationStack />
      </RootSiblingParent>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
})
