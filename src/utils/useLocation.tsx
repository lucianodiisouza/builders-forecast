import * as Location from 'expo-location'
import { useCallback, useEffect, useState } from 'react'

const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject>()

  const getLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      console.warn('Sem permissões')
      return
    }

    const location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }, [])

  useEffect(() => {
    getLocation()
  }, [])

  return { location, getLocation }
}

export default useLocation
