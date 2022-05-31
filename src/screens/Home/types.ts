type WeatherStatus = {
  description: string
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

export interface Weekly extends WeatherResponse {
  dt_txt: string
}

export type WeeklyWeatherResponse = {
  list: Weekly[]
}
