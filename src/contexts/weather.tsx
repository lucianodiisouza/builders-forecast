import { LocationObject } from 'expo-location'
import React, { createContext, useEffect } from 'react'
import { WeatherResponse, WeeklyWeatherResponse } from '../hooks/types'
import useLocation from '../hooks/useLocation'
import { useTodayWeather, useWeeklyWeather } from '../hooks/useWeather'
import tomorrowFilter from '../utils/tomorrowFilter'

type WeatherContextType = {
  weather: WeatherResponse | undefined
  getWeather: (location: LocationObject) => void
  isLoadingTodayWeather: boolean
  weeklyWeather: WeeklyWeatherResponse | undefined
  getWeeklyWeather: (location: LocationObject) => void
  isLoadingWeeklyWeather: boolean
  tomorrowWeather: any
  location: LocationObject | undefined
  getLocation: () => void
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const { weather, getWeather, isLoadingTodayWeather } = useTodayWeather()
  const { weeklyWeather, getWeeklyWeather, isLoadingWeeklyWeather } =
    useWeeklyWeather()

  const { getLocation, location } = useLocation()

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location) {
      getWeather(location)
      getWeeklyWeather(location)
    }
  }, [location])

  const tomorrowWeather = weeklyWeather ? tomorrowFilter(weeklyWeather) : []

  return (
    <WeatherContext.Provider
      value={{
        weather,
        getWeather,
        isLoadingTodayWeather,
        weeklyWeather,
        getWeeklyWeather,
        isLoadingWeeklyWeather,
        tomorrowWeather,
        location,
        getLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
