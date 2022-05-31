import { LocationObject } from 'expo-location'
import { useState } from 'react'
import Toast from 'react-native-root-toast'
import { WeatherResponse } from '../screens/Home/types'
import { getCurrentWeather } from '../services/endpoints'
import useLocation from './useLocation'

const useWeather = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState<WeatherResponse>()
  const [error, setError] = useState('')

  const getWeather = (location: LocationObject) => {
    if (location) {
      setIsLoading(true)
      const lat = location.coords.latitude ?? 0
      const lon = location.coords.longitude ?? 0

      getCurrentWeather({ lat, lon })
        .then((res) => {
          console.warn(res.data)
          setWeather(res.data)
        })
        .catch((err) => {
          console.warn(lat, lon)
          console.warn(err)
        })
        .finally(() => setIsLoading(false))
    } else {
      Toast.show('Localização não encontrada')
    }
  }
  return { isLoading, weather, getWeather, error }
}

export default useWeather
