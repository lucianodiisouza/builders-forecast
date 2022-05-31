import { useContext, useEffect } from 'react'

import {
  AnimatedFetch,
  AnimatedLocation,
  CurrentTemp,
  Header,
  LinearGradientView,
  NavigationMenu,
  TempSlider,
} from '../../components'

import { AppColors } from '../../theme/GlobalStyles'

import { Container, SliderContainer } from './styles'
import { WeatherContext } from '../../contexts/weather'

const Home = () => {
  const {
    weather,
    getWeather,
    isLoadingTodayWeather,
    getWeeklyWeather,
    isLoadingWeeklyWeather,
    tomorrowWeather,
    location,
  } = useContext(WeatherContext)

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        {!location && <AnimatedLocation label='Obtendo sua localização' />}

        {isLoadingTodayWeather && isLoadingWeeklyWeather && (
          <AnimatedFetch label='Carregando informações do clima' />
        )}
        {!!weather && !isLoadingTodayWeather && (
          <>
            <Header city={weather.name} country={weather.sys.country} />
            <CurrentTemp
              temp={weather.main.temp}
              weatherCondition={weather.weather[0].description}
              icon={weather.weather[0].main}
            />
            <SliderContainer>
              <NavigationMenu />
              <TempSlider temp={tomorrowWeather} />
            </SliderContainer>
          </>
        )}
      </LinearGradientView>
    </Container>
  )
}

export default Home
