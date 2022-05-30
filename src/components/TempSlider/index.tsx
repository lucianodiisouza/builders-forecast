import { Text, View } from 'react-native'
import { Container, ScrollContainer, Item } from './styles'

const TempSlider = () => {
  return (
    <Container>
      <ScrollContainer
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
        <Item>
          <Text>Item</Text>
        </Item>
      </ScrollContainer>
    </Container>
  )
}

export default TempSlider
