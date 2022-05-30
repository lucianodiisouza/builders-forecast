import { Feather } from '@expo/vector-icons'

type Props = {
  name: string
  size: number
  color: string
}

const Icon = ({ name, size, color }: Props) => (
  <Feather name={name} size={size} color={color} />
)

export default Icon
