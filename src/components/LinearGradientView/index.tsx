import { LinearGradientProps } from 'expo-linear-gradient'
import { GradientContainer } from './styles'

const LinearGradientView = ({ children, ...props }: LinearGradientProps) => {
  return (
    <GradientContainer {...props} style>
      {children}
    </GradientContainer>
  )
}

export default LinearGradientView
