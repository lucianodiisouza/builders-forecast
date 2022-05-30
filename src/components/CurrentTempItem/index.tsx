import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, ItemTime, ItemTemp } from './styles'

const SliderItem = () => {
  return (
    <Container>
      <ItemTime>9AM</ItemTime>
      <Icon name='cloud' size={18} color={AppColors.WHITE} />
      <ItemTemp>16º</ItemTemp>
    </Container>
  )
}

export default SliderItem
