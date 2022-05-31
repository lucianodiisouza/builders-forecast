import { Icon } from '../../components'
import { AppColors } from '../../theme/GlobalStyles'
import {
  Container,
  TempContainer,
  TemperatureLabel,
  WeatherItem,
  WeatherItemLabel,
  ScreenLabel,
} from './styles'

const nextDays = [
  {
    day: 'Domingo',
    icon: 'sun',
    temp: '12 º',
  },
  {
    day: 'Segunda',
    icon: 'cloud',
    temp: '12 º',
  },
  {
    day: 'Terça',
    icon: 'cloud',
    temp: '12 º',
  },
  {
    day: 'Quarta',
    icon: 'cloud',
    temp: '12 º',
  },
  {
    day: 'Quinta',
    icon: 'cloud',
    temp: '12 º',
  },
  {
    day: 'Sexta',
    icon: 'cloud',
    temp: '12 º',
  },
  {
    day: 'Sábado',
    icon: 'cloud',
    temp: '12 º',
  },
]

const NextDays = () => {
  return (
    <Container>
      <ScreenLabel>Próximos 7 Dias</ScreenLabel>

      {nextDays.map((item, index) => (
        <WeatherItem key={index}>
          <WeatherItemLabel>{item.day}</WeatherItemLabel>
          <TempContainer>
            <Icon name={item.icon} size={24} color={AppColors.BLUE} />
            <TemperatureLabel>{item.temp}</TemperatureLabel>
          </TempContainer>
        </WeatherItem>
      ))}
    </Container>
  )
}

export default NextDays
