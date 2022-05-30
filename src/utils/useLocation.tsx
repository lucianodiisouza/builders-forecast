import * as Location from 'expo-location'
import { useState } from 'react'

const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject>()

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      console.warn('Sem permissões')
      return
    }

    const location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }

  return { location, getLocation }
}

export default useLocation
