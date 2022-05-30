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
  console.log(time, temp, icon)
  return (
    <Container isTheLast={isTheLast}>
      <ItemTime>9AM</ItemTime>
      <Icon name='cloud' size={18} color={AppColors.WHITE} />
      <ItemTemp>16º</ItemTemp>
    </Container>
  )
}

export default SliderItem
