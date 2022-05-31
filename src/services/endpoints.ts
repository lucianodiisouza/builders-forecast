import api from '.'
import { WeatherRequestParams } from './types'

const fetchCurrentWeather = async ({ lat, lon }: WeatherRequestParams) => {
  const response = await api.get('/weather', {
    params: {
      lon,
      lat,
    },
  })

  return response || {}
}

const fetchNextDaysWeather = async ({ lat, lon }: WeatherRequestParams) => {
  const response = await api.get('/forecast', {
    params: {
      lat,
      lon,
    },
  })

  return response || {}
}
export { fetchCurrentWeather, fetchNextDaysWeather }
