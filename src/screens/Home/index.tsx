import { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native'
import api from '../../services'
import useLocation from '../../utils/useLocation'

const Home = () => {
  const { location, getLocation } = useLocation()

  const [weather, setWeather] = useState()

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

  // const handleFetchCurrentWeather = () => {
  //   console.warn(getWeather())
  // }

  return (
    <View>
      {!!weather && <Text>{JSON.stringify(weather)}</Text>}
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
