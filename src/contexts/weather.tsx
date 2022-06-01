import { LocationObject } from 'expo-location'
import React, { createContext, useEffect } from 'react'
import { WeatherResponse, WeeklyWeatherResponse } from '../hooks/types'
import useLocation from '../hooks/useLocation'
import useNetwork from '../hooks/useNetwork'
import { useTodayWeather, useWeeklyWeather } from '../hooks/useWeather'
import tomorrowFilter from '../utils/tomorrowFilter'

type WeatherContextType = {
  weather: WeatherResponse | undefined
  getWeather: (location: LocationObject) => void
  weeklyWeather: WeeklyWeatherResponse | undefined
  getWeeklyWeather: (location: LocationObject) => void
  tomorrowWeather: any
  location: LocationObject | undefined
  getLocation: () => void
  isOffline: boolean
  isLoading: boolean
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const { weather, getWeather, isLoadingTodayWeather } = useTodayWeather()
  const { weeklyWeather, getWeeklyWeather, isLoadingWeeklyWeather } =
    useWeeklyWeather()
  const { getLocation, location } = useLocation()
  const { networkStatus, getNetworkStatus } = useNetwork()

  let isOffline = !networkStatus || !networkStatus.isConnected
  let isLoading = isLoadingTodayWeather || isLoadingWeeklyWeather

  useEffect(() => {
    getNetworkStatus()
  }, [])

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location && !isOffline) {
      getWeather(location)
      getWeeklyWeather(location)
    }
  }, [location, isOffline])

  const tomorrowWeather = weeklyWeather ? tomorrowFilter(weeklyWeather) : []

  return (
    <WeatherContext.Provider
      value={{
        weather,
        getWeather,

        weeklyWeather,
        getWeeklyWeather,

        tomorrowWeather,
        location,
        getLocation,
        isOffline,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
