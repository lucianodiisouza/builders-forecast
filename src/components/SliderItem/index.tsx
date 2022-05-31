import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, ItemTime, ItemTemp } from './styles'
import { SliderItemProps } from './types'

const SliderItem = ({ time, temp, icon, isTheLast }: SliderItemProps) => {
  return (
    <Container isTheLast={isTheLast}>
      <ItemTime>{time}</ItemTime>
      <Icon name={icon} size={18} color={AppColors.WHITE} />
      <ItemTemp>{temp}</ItemTemp>
    </Container>
  )
}

export default SliderItem
