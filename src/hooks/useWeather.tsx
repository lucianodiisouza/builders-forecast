import { LocationObject } from 'expo-location'
import { useState } from 'react'
import Toast from 'react-native-root-toast'
import { WeatherResponse } from '../screens/Home/types'
import {
  fetchCurrentWeather,
  fetchNextDaysWeather,
} from '../services/endpoints'
import { convertCountryCodeToCountry } from '../utils/country'

const useTodayWeather = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState<WeatherResponse>()
  const [error, setError] = useState('')

  const getWeather = (location: LocationObject) => {
    if (location) {
      setIsLoading(true)
      const lat = location.coords.latitude ?? 0
      const lon = location.coords.longitude ?? 0

      fetchCurrentWeather({ lat, lon })
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

const useWeeklyWeather = () => {
  const [isLoadingNextDays, setIsLodadingNextDays] = useState<boolean>(false)
  const [weeklyWeather, setWeeklyWeather] = useState()
  const [error, setError] = useState('')

  const getWeeklyWeather = (location: LocationObject) => {
    if (location) {
      setIsLodadingNextDays(true)
      const lat = location.coords.latitude ?? 0
      const lon = location.coords.longitude ?? 0

      fetchNextDaysWeather({ lat, lon })
        .then((res) => {
          setWeeklyWeather(res.data)
        })
        .catch(() => {
          Toast.show('Erro ao obter a previsão dos próximos dias')
        })
        .finally(() => setIsLodadingNextDays(false))
    } else {
      Toast.show('Localização não encontrada')
    }
  }
  return { isLoadingNextDays, weeklyWeather, getWeeklyWeather, error }
}

export { useTodayWeather, useWeeklyWeather }
