import { Feather } from '@expo/vector-icons'
import { IconProps } from './types'

const Icon = ({ name, size, color }: IconProps) => (
  <Feather name={name} size={size} color={color} />
)

export default Icon
