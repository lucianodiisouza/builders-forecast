import useDate from '../../utils/useDate'
import { Container, Title, TextDate } from './styles'

type Props = {
  city: string
  country: string
}

const Header = ({ city, country }: Props) => {
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
