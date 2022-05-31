import LottieView from 'lottie-react-native'

import { Container, Label } from './styles'
import { AnimationContainerProps } from './types'

import loading from '../../../assets/animations/loading.json'

const AnimatedFetch = ({ label }: AnimationContainerProps) => {
  return (
    <Container>
      {/* @ts-ignore */}
      <LottieView autoPlay source={loading} />

      {label && <Label>{label}</Label>}
    </Container>
  )
}

export default AnimatedFetch
