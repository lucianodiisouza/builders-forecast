import SliderItem from '../SliderItem'
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
      {/* <FlatList
        contentContainerStyle={{
          backgroundColor: AppColors.DARK_BLUE,
          alignItems: 'center',
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          paddingRight: 50,
          height: 180,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={temp}
        renderItem={({ item }) => <SliderItem {...item} />}
        keyExtractor={(item) => item.time}
      /> */}
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
