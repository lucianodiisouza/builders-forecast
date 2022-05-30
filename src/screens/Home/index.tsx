import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import api from '../../services'
import useLocation from '../../utils/useLocation'

type WeatherResponse = {
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
}

const Home = () => {
  const { location, getLocation } = useLocation()

  const [weather, setWeather] = useState<WeatherResponse>()

  useEffect(() => {
    getLocation()
  }, [])

  const getWeather = async () => {
    if (location) {
      const lat = location.coords.altitude
      const lon = location.coords.longitude

      const response = await api.get('/weather', {
        params: {
          lat,
          lon,
        },
      })

      setWeather(response.data)
    } else {
      console.warn('location not found')
    }
  }

  return (
    <View>
      {!!weather && (
        <View>
          <Text>{weather.name}</Text>
          <Text>{Math.floor(weather.main.temp)}º</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={getWeather}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          alignItems: 'center',
        }}
      >
        <Text>Push data</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
