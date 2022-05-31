import SliderItem from '../SliderItem'
import { Container, ScrollContainer } from './styles'
import { TempSliderProps } from './types'

const TempSlider = ({ temp }: TempSliderProps) => {
  return (
    <Container>
      <ScrollContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        {temp.map((item, index) => (
          <SliderItem
            {...item}
            key={index}
            isTheLast={index === temp.length - 1}
          />
        ))}
      </ScrollContainer>
    </Container>
  )
}

export default TempSlider
