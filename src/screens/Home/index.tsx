import { useEffect, useState } from 'react'
import { Text } from 'react-native'

import {
  CurrentTemp,
  Header,
  LinearGradientView,
  NavigationMenu,
  TempSlider,
} from '../../components'

import { AppColors } from '../../theme/GlobalStyles'

import useLocation from '../../hooks/useLocation'
import useWeather from '../../hooks/useWeather'

import { Container, SliderContainer } from './styles'

const Home = () => {
  const { location, getLocation } = useLocation()
  const { weather, getWeather, isLoading } = useWeather()
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

  const [active, setActive] = useState<'hoje' | 'amanha'>('hoje')

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location) {
      getWeather(location)
    }
  }, [location])

  const handleActiveItems = active === 'hoje' ? todayWeather : tomorrowWeather

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        {!!location && <Text>Obtendo localização</Text>}
        {isLoading && <Text>Carregando...</Text>}
        {!!weather && !isLoading && (
          <>
            <Header city={weather.name} country='Brasil' />
            <CurrentTemp />
            <SliderContainer>
              <NavigationMenu active={active} setActive={setActive} />
              <TempSlider temp={handleActiveItems} />
            </SliderContainer>
          </>
        )}
      </LinearGradientView>
    </Container>
  )
}

export default Home
