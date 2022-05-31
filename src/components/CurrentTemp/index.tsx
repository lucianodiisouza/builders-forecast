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
import { getIcon } from '../../utils/icon'

const CurrentTemp = ({ temp, weatherCondition, icon }: CurrentTempProps) => {
  const formattedTemp = temp.toFixed(0)
  return (
    <Container>
      <WeatherDay>Hoje</WeatherDay>
      <PrevisionContainer>
        <Icon name={getIcon(icon)} size={64} color={AppColors.YELLOW} />
        <TempText>{formattedTemp} º</TempText>
      </PrevisionContainer>
      <WeatherType>{weatherCondition}</WeatherType>
    </Container>
  )
}

export default CurrentTemp
