import useDate from '../../utils/useDate'
import { Container, Title, TextDate } from './styles'
import { HeaderProps } from './types'

const Header = ({ city, country }: HeaderProps) => {
  const date = useDate()

  return (
    <Container>
      <Title>{city},</Title>
      <Title>{country}</Title>

      <TextDate>{date}</TextDate>
    </Container>
  )
}

export default Header
