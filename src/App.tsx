import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Home } from './screens'

import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Home />
        <StatusBar style='light' />
      </View>
    </RootSiblingParent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
