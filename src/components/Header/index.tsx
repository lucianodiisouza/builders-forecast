import { useContext } from 'react'
import { Pressable } from 'react-native'
import { WeatherContext } from '../../contexts/weather'
import useDate from '../../hooks/useDate'
import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, Title, TextDate, InfoContainer } from './styles'
import { HeaderProps } from './types'

const Header = ({ city, country }: HeaderProps) => {
  const { getLocation } = useContext(WeatherContext)
  const date = useDate()

  return (
    <Container>
      <InfoContainer>
        <Title>{city},</Title>
        <Title>{country}</Title>

        <TextDate>{date}</TextDate>
      </InfoContainer>

      <Pressable onPress={() => getLocation()}>
        <Icon name='refresh-cw' size={32} color={AppColors.WHITE} />
      </Pressable>
    </Container>
  )
}

export default Header
