import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, ItemTime, ItemTemp } from './styles'

type Props = {
  time: string
  temp: string
  icon: string
  isTheLast: boolean
}

const SliderItem = ({ time, temp, icon, isTheLast }: Props) => {
  return (
    <Container isTheLast={isTheLast}>
      <ItemTime>{time}</ItemTime>
      <Icon name={icon} size={18} color={AppColors.WHITE} />
      <ItemTemp>{temp}</ItemTemp>
    </Container>
  )
}

export default SliderItem
