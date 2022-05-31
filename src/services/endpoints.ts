import api from '.'
import { CurrentWeatherRequestParams } from './types'

const getCurrentWeather = async ({ lat, lon }: CurrentWeatherRequestParams) => {
  const response = await api.get('/weather', {
    params: {
      lon,
      lat,
    },
  })

  return response || {}
}

export { getCurrentWeather }
