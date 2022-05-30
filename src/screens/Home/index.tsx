import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Toast from 'react-native-root-toast'

import {
  CurrentTemp,
  Header,
  LinearGradientView,
  TempSlider,
} from '../../components'
import api from '../../services'
import { AppColors } from '../../theme/GlobalStyles'
import useLocation from '../../utils/useLocation'

import { Container } from './styles'
import { WeatherResponse } from './types'

const Home = () => {
  const { location, getLocation } = useLocation()

  const [weather, setWeather] = useState<WeatherResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      Toast.show('Localização não encontrada')
    }
  }

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.DARK_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        <Header city='Belo Horizonte' country='Brasil' />
        <CurrentTemp />
        <TempSlider />
        {/* {!!weather && (
          
          // <View>
          //   <Text>{weather.name}</Text>
          //   <Text>{Math.floor(weather.main.temp)}º</Text>
          // </View>
        )} */}
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
      </LinearGradientView>
    </Container>
  )
}

export default Home
