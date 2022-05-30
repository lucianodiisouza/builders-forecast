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
      <WeatherDay>Today</WeatherDay>
      <PrevisionContainer>
        <Icon name='sun' size={42} color={AppColors.GOLDEN} />
        <TempText>22 º</TempText>
      </PrevisionContainer>
      <WeatherType>Sunny</WeatherType>
    </Container>
  )
}

export default CurrentTemp
