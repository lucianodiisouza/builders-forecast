import * as Location from 'expo-location'
import { useCallback, useEffect, useState } from 'react'
import Toast from 'react-native-root-toast'

const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject>()

  const getLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      Toast.show('Permissões de acesso não concedidas')
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
