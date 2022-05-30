import { Icon } from '..'

import { AppColors } from '../../theme/GlobalStyles'

import {
  Container,
  WeatherDay,
  PrevisionContainer,
  TempText,
  WeatherType,
} from './styles'

const CurrentTemp = () => {
  return (
    <Container>
      <WeatherDay>Hoje</WeatherDay>
      <PrevisionContainer>
        <Icon name='sun' size={64} color={AppColors.YELLOW} />
        <TempText>22 º</TempText>
      </PrevisionContainer>
      <WeatherType>Ensolarado</WeatherType>
    </Container>
  )
}

export default CurrentTemp
