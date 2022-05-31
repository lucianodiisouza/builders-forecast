import { useContext, useEffect, useState } from 'react'

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

import { Container, SliderContainer } from './styles'
import { WeatherContext } from '../../contexts/weather'

const Home = () => {
  const {
    weather,
    getWeather,
    isLoadingTodayWeather,
    getWeeklyWeather,
    isLoadingWeeklyWeather,
    weeklyWeather,
  } = useContext(WeatherContext)

  const { location } = useLocation()

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

        {isLoadingTodayWeather && isLoadingWeeklyWeather && (
          <AnimationContainer
            type='loading'
            label='Carregando informações do clima'
          />
        )}
        {!!weather && !isLoadingTodayWeather && (
          <>
            <Header city={weather.name} country={weather.sys.country} />
            <CurrentTemp
              temp={weather.main.temp}
              weatherCondition={weather.weather[0].description}
              icon={weather.weather[0].icon}
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
