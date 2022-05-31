import { getIcon } from '../../utils/icon'
import Icon from '../Icon'
import { Container, ItemTime, ItemTemp } from './styles'
import { SliderItemProps } from './types'

const SliderItem = ({
  time,
  temp,
  icon,
  isTheLast,
  color,
}: SliderItemProps) => {
  const iconName = getIcon(icon.toLocaleLowerCase())
  return (
    <Container isTheLast={isTheLast}>
      <ItemTime>{time}H</ItemTime>
      <Icon name={iconName} size={18} color={color} />
      <ItemTemp>{temp}º</ItemTemp>
    </Container>
  )
}

export default SliderItem
