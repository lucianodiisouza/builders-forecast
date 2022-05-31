import SliderItem from '../SliderItem'
import { Container, ScrollContainer } from './styles'

type Item = {
  time: string
  temp: string
  icon: string
}

type Props = {
  temp: Item[]
}
const TempSlider = ({ temp }: Props) => {
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
