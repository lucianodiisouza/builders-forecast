import { WeatherItem } from '../../components'
import { AppColors } from '../../theme/GlobalStyles'
import { Container, ScreenLabel } from './styles'

const nextDays = [
  {
    day: 'Domingo',
    icon: 'sun',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Segunda',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Terça',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Quarta',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Quinta',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Sexta',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
  {
    day: 'Sábado',
    icon: 'cloud',
    temp: '12 º',
    color: AppColors.YELLOW,
  },
]

const NextDays = () => {
  return (
    <Container>
      <ScreenLabel>Próximos 5 Dias</ScreenLabel>
      {nextDays.map((item, index) => (
        <WeatherItem key={index} {...item} />
      ))}
    </Container>
  )
}

export default NextDays
