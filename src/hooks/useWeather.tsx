import { LocationObject } from 'expo-location'
import { useState } from 'react'
import Toast from 'react-native-root-toast'

import {
  fetchCurrentWeather,
  fetchNextDaysWeather,
} from '../services/endpoints'
import { convertCountryCodeToCountry } from '../utils/country'
import { WeatherResponse, WeeklyWeatherResponse } from './types'

const useTodayWeather = () => {
  const [isLoadingTodayWeather, setIsLoadingTodayWeather] =
    useState<boolean>(false)
  const [weather, setWeather] = useState<WeatherResponse>()
  const [error, setError] = useState('')

  const getWeather = (location: LocationObject) => {
    if (location) {
      setIsLoadingTodayWeather(true)
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
        .finally(() => setIsLoadingTodayWeather(false))
    } else {
      Toast.show('Localização não encontrada')
    }
  }
  return { isLoadingTodayWeather, weather, getWeather, error }
}

const useWeeklyWeather = () => {
  const [isLoadingWeeklyWeather, setIsLoadingWeeklyWeather] =
    useState<boolean>(false)
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherResponse>()
  const [error, setError] = useState('')

  const getWeeklyWeather = (location: LocationObject) => {
    if (location) {
      setIsLoadingWeeklyWeather(true)
      const lat = location.coords.latitude ?? 0
      const lon = location.coords.longitude ?? 0

      fetchNextDaysWeather({ lat, lon })
        .then((res) => {
          setWeeklyWeather(res.data)
        })
        .catch(() => {
          Toast.show('Erro ao obter a previsão dos próximos dias')
        })
        .finally(() => setIsLoadingWeeklyWeather(false))
    } else {
      Toast.show('Localização não encontrada')
    }
  }
  return { isLoadingWeeklyWeather, weeklyWeather, getWeeklyWeather, error }
}

export { useTodayWeather, useWeeklyWeather }
