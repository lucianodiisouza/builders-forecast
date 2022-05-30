import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'

const Home = () => {
  const [location, setLocation] = useState<any>(null)

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      console.warn('Sem permissões')
      return
    }

    const location = await Location.getCurrentPositionAsync({})
    setLocation(location)
    console.warn(location)
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <View>
      <Text>Forecast</Text>
    </View>
  )
}

export default Home
