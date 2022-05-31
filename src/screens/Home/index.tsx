import { useContext } from 'react'

import {
  AnimatedFetch,
  AnimatedLocation,
  AnimatedOffline,
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
  const { weather, isLoading, tomorrowWeather, location, isOffline } =
    useContext(WeatherContext)

  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        {isOffline && (
          <AnimatedOffline label='Você está desconectado da internet!' />
        )}
        {!location && <AnimatedLocation label='Obtendo sua localização' />}

        {isLoading && !isOffline && (
          <AnimatedFetch label='Carregando informações do clima' />
        )}
        {!!weather && !isLoading && !isOffline && (
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

        {!weather && !isLoading && !isOffline && (
          <AnimatedOffline label='Algo de errado não está certo!' />
        )}
      </LinearGradientView>
    </Container>
  )
}

export default Home
