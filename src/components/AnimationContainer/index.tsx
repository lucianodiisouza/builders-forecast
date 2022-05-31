import LottieView from 'lottie-react-native'

import { Container, Label } from './styles'
import { AnimationContainerProps } from './types'

const location = require('../../assets/animations/location.json')
const loading = require('../../assets/animations/loading.json')

const AnimationContainer = ({ type, label }: AnimationContainerProps) => {
  return (
    <Container>
      <LottieView autoPlay source={type === 'location' ? location : loading} />

      <Label>{label}</Label>
    </Container>
  )
}

export default AnimationContainer
