import SliderItem from '../CurrentTempItem'
import { Container, ScrollContainer } from './styles'

const temp = [
  {
    time: '9AM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '10AM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '11AM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '12PM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '13PM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '14PM',
    temp: '16º',
    icon: 'cloud',
  },
  {
    time: '15PM',
    temp: '16º',
    icon: 'cloud',
  },
]

const TempSlider = () => {
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
          <SliderItem {...item} key={index} />
        ))}
      </ScrollContainer>
    </Container>
  )
}

export default TempSlider
