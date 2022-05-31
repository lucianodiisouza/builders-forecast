import { useEffect, useState } from 'react'
import Toast from 'react-native-root-toast'

import {
  CurrentTemp,
  Header,
  LinearGradientView,
  NavigationMenu,
  TempSlider,
} from '../../components'

import api from '../../services'
import { AppColors } from '../../theme/GlobalStyles'
import useLocation from '../../utils/useLocation'

import { Container, SliderContainer } from './styles'
import { WeatherResponse } from './types'

const Home = () => {
  const { location, getLocation } = useLocation()

  const [weather, setWeather] = useState<WeatherResponse>()
  const [tomorrowWeather, setTomorrowWeather] = useState([
    {
      time: '9AM',
      temp: '16º',
      icon: 'cloud',
    },
    {
      time: '10AM',
      temp: '16º',
      icon: 'cloud-rain',
    },
    {
      time: '11AM',
      temp: '16º',
      icon: 'sun',
    },
    {
      time: '12PM',
      temp: '16º',
      icon: 'sun',
    },
    {
      time: '13PM',
      temp: '16º',
      icon: 'wind',
    },
    {
      time: '14PM',
      temp: '16º',
      icon: 'cloud',
    },
    {
      time: '15PM',
      temp: '16º',
      icon: 'cloud',
    },
  ])

  const [todayWeather, setTodayWeather] = useState([
    {
      time: '9AM',
      temp: '17º',
      icon: 'cloud-rain',
    },
    {
      time: '10AM',
      temp: '18º',
      icon: 'cloud-rain',
    },
    {
      time: '11AM',
      temp: '16º',
      icon: 'sun',
    },
    {
      time: '12PM',
      temp: '16º',
      icon: 'sun',
    },
    {
      time: '13PM',
      temp: '16º',
      icon: 'wind',
    },
    {
      time: '14PM',
      temp: '16º',
      icon: 'cloud',
    },
    {
      time: '15PM',
      temp: '16º',
      icon: 'cloud',
    },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [active, setActive] = useState<'hoje' | 'amanha'>('hoje')

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

  const handleActiveItems = active === 'hoje' ? todayWeather : tomorrowWeather

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        <Header city='Belo Horizonte' country='Brasil' />
        <CurrentTemp />
        <SliderContainer>
          <NavigationMenu active={active} setActive={setActive} />
          <TempSlider temp={handleActiveItems} />
        </SliderContainer>
      </LinearGradientView>
    </Container>
  )
}

export default Home
