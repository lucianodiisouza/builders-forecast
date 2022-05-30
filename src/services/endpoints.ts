import api from '.'

type CurrentWeatherRequestParams = {
  lat: number
  alt: number
}

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
