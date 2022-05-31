import api from '.'
import { CurrentWeatherRequestParams } from './types'

const getCurrentWeather = async ({ lat, alt }: CurrentWeatherRequestParams) => {
  const response = await api.get('/weather', {
    params: {
      alt,
      lat,
    },
  })

  return response || {}
}

export { getCurrentWeather }
