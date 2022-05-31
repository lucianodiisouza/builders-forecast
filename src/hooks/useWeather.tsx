import { LocationObject } from 'expo-location'
import { useState } from 'react'
import Toast from 'react-native-root-toast'
import { WeatherResponse } from '../screens/Home/types'
import { getCurrentWeather } from '../services/endpoints'
import { convertCountryCodeToCountry } from '../utils/country'
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
          const countryCode = res.data.sys.country

          const response = {
            ...res.data,
            sys: { country: convertCountryCodeToCountry(countryCode) },
          }

          setWeather(response)
        })
        .catch(() => {
          Toast.show('Erro ao obter a previsão do tempo')
        })
        .finally(() => setIsLoading(false))
    } else {
      Toast.show('Localização não encontrada')
    }
  }
  return { isLoading, weather, getWeather, error }
}

export default useWeather
