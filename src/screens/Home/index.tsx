import { useContext } from 'react'

import {
  AnimatedFetch,
  AnimatedLocation,
  AnimatedOffline,
  CurrentTemp,
  Header,
  NavigationMenu,
  TempSlider,
} from '../../components'

import { SliderContainer } from './styles'
import { WeatherContext } from '../../contexts/weather'
import CommonLayout from '../../components/CommonLayout'

const Home = () => {
  const { weather, isLoading, tomorrowWeather, location, isOffline } =
    useContext(WeatherContext)

  if (isLoading && !isOffline) {
    return (
      <CommonLayout>
        <AnimatedFetch label='Carregando informações do clima' />
      </CommonLayout>
    )
  }

  if (isOffline) {
    return (
      <CommonLayout>
        <AnimatedOffline label='Você está desconectado da internet!' />
      </CommonLayout>
    )
  }

  if (!location) {
    return (
      <CommonLayout>
        <AnimatedLocation label='Obtendo sua localização' />
      </CommonLayout>
    )
  }

  if (!!weather && !isLoading && !isOffline) {
    return (
      <CommonLayout>
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
      </CommonLayout>
    )
  }

  return <CommonLayout />
}

export default Home
