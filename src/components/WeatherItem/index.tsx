import { getIcon } from '../../utils/icon'
import Icon from '../Icon'
import {
  Container,
  WeatherItemLabel,
  TempContainer,
  TemperatureLabel,
} from './styles'
import { WeatherItemProps } from './types'

const WeatherItem = ({ day, icon, color, temp }: WeatherItemProps) => {
  return (
    <Container>
      <WeatherItemLabel>{day}</WeatherItemLabel>
      <TempContainer>
        <Icon
          name={getIcon(icon.toLocaleLowerCase())}
          size={24}
          color={color}
        />
        <TemperatureLabel>{temp}º </TemperatureLabel>
      </TempContainer>
    </Container>
  )
}

export default WeatherItem
