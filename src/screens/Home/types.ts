type WeatherStatus = {
  description: 'céu limpo'
}

export type WeatherResponse = {
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    country: string
  }
  weather: WeatherStatus[]
}
