import LottieView from 'lottie-react-native'

import { Container, Label } from './styles'
import { AnimationContainerProps } from './types'

import location from '../../../assets/animations/location.json'

const AnimatedLocation = ({ label }: AnimationContainerProps) => {
  return (
    <Container>
      {/* @ts-ignore */}
      <LottieView autoPlay source={location} />

      {label && <Label>{label}</Label>}
    </Container>
  )
}

export default AnimatedLocation
