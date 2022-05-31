import LottieView from 'lottie-react-native'

import { Container, Label } from './styles'
import { AnimationContainerProps } from './types'

import offline from '../../../assets/animations/offline.json'

const AnimatedOffline = ({ label }: AnimationContainerProps) => {
  return (
    <Container>
      {/* @ts-ignore */}
      <LottieView autoPlay source={offline} />

      {label && <Label>{label}</Label>}
    </Container>
  )
}

export default AnimatedOffline
