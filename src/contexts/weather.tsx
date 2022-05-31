import { LocationObject } from 'expo-location'
import React, { createContext } from 'react'
import { TempSliderProps } from '../components/TempSlider/types'
import { WeatherResponse, WeeklyWeatherResponse } from '../hooks/types'
import { useTodayWeather, useWeeklyWeather } from '../hooks/useWeather'
import tomorrowFilter from '../utils/tomorrowFilter'

type Item = {
  time: string
  temp: string
  icon: string
  color: string
}

type WeatherContextType = {
  weather: WeatherResponse | undefined
  getWeather: (location: LocationObject) => void
  isLoadingTodayWeather: boolean
  weeklyWeather: WeeklyWeatherResponse | undefined
  getWeeklyWeather: (location: LocationObject) => void
  isLoadingWeeklyWeather: boolean
  tomorrowWeather: any
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const { weather, getWeather, isLoadingTodayWeather } = useTodayWeather()
  const { weeklyWeather, getWeeklyWeather, isLoadingWeeklyWeather } =
    useWeeklyWeather()

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
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
