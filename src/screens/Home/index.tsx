import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'
import useLocation from '../../utils/useLocation'

const Home = () => {
  const { location, getLocation } = useLocation()

  useEffect(() => {
    getLocation()
  }, [])

  return <View>{!!location && <Text>{JSON.stringify(location)}</Text>}</View>
}

export default Home
