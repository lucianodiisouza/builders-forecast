import Icon from '../Icon'

import { AppColors } from '../../theme/GlobalStyles'

import {
  Container,
  WeatherDay,
  PrevisionContainer,
  TempText,
  WeatherType,
} from './styles'
import { CurrentTempProps } from './types'

const CurrentTemp = ({ temp, weatherCondition }: CurrentTempProps) => {
  const formattedTemp = temp.toFixed(0)
  return (
    <Container>
      <WeatherDay>Hoje</WeatherDay>
      <PrevisionContainer>
        <Icon name='sun' size={64} color={AppColors.YELLOW} />
        <TempText>{formattedTemp} º</TempText>
      </PrevisionContainer>
      <WeatherType>{weatherCondition}</WeatherType>
    </Container>
  )
}

export default CurrentTemp
