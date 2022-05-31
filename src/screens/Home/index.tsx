import { useEffect, useState } from 'react'
import { Text } from 'react-native'

import {
  AnimationContainer,
  CurrentTemp,
  Header,
  LinearGradientView,
  NavigationMenu,
  TempSlider,
} from '../../components'

import { AppColors } from '../../theme/GlobalStyles'

import useLocation from '../../hooks/useLocation'
import { useWeeklyWeather, useTodayWeather } from '../../hooks/useWeather'

import { Container, SliderContainer } from './styles'

const Home = () => {
  const { location } = useLocation()
  const { weather, getWeather, isLoading } = useTodayWeather()
  const { weeklyWeather, getWeeklyWeather } = useWeeklyWeather()

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
    if (location) {
      getWeather(location)
      getWeeklyWeather(location)
    }
  }, [location])

  useEffect(() => {
    console.warn(weeklyWeather)
  }, [weeklyWeather])

  const handleActiveItems = active === 'hoje' ? todayWeather : tomorrowWeather

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        {!location && (
          <AnimationContainer type='location' label='Obtendo sua localização' />
        )}
        {isLoading && (
          <AnimationContainer
            type='loading'
            label='Carregando informações do clima'
          />
        )}
        {!!weather && !isLoading && (
          <>
            <Header city={weather.name} country={weather.sys.country} />
            <CurrentTemp
              temp={weather.main.temp}
              weatherCondition={weather.weather[0].description}
            />
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
