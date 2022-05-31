import { LocationObject } from 'expo-location'
import React, { createContext } from 'react'
import { WeatherResponse, WeeklyWeatherResponse } from '../hooks/types'
import { useTodayWeather, useWeeklyWeather } from '../hooks/useWeather'

type WeatherContextType = {
  weather: WeatherResponse | undefined
  getWeather: (location: LocationObject) => void
  isLoadingTodayWeather: boolean
  weeklyWeather: WeeklyWeatherResponse | undefined
  getWeeklyWeather: (location: LocationObject) => void
  isLoadingWeeklyWeather: boolean
}
export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const { weather, getWeather, isLoadingTodayWeather } = useTodayWeather()
  const { weeklyWeather, getWeeklyWeather, isLoadingWeeklyWeather } =
    useWeeklyWeather()

  return (
    <WeatherContext.Provider
      value={{
        weather,
        getWeather,
        isLoadingTodayWeather,
        weeklyWeather,
        getWeeklyWeather,
        isLoadingWeeklyWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
