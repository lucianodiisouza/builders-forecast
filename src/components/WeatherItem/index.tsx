import Icon from '../Icon'
import {
  Container,
  WeatherItemLabel,
  TempContainer,
  TemperatureLabel,
} from './styles'

type WeatherItemProps = {
  day: string
  icon: string
  color: string
  temp: string
}

const WeatherItem = ({ day, icon, color, temp }: WeatherItemProps) => {
  return (
    <Container>
      <WeatherItemLabel>{day}</WeatherItemLabel>
      <TempContainer>
        <Icon name={icon} size={24} color={color} />
        <TemperatureLabel>{temp}</TemperatureLabel>
      </TempContainer>
    </Container>
  )
}

export default WeatherItem
