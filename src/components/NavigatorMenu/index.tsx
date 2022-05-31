import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, Option, Label } from './styles'

type Props = {
  active: 'hoje' | 'amanha'
  setActive: (active: 'hoje' | 'amanha') => void
}

const NavigatorMenu = ({ active, setActive }: Props) => {
  return (
    <Container>
      <Option onPress={() => setActive('hoje')}>
        <Label isActive={active === 'hoje'}>Hoje</Label>
      </Option>

      <Option>
        <Label
          onPress={() => setActive('amanha')}
          isActive={active === 'amanha'}
        >
          Amanhã
        </Label>
      </Option>

      <Option>
        <Label>
          Próximos 7 dias{' '}
          <Icon size={16} color={AppColors.GRAY} name='arrow-right' />
        </Label>
      </Option>
    </Container>
  )
}

export default NavigatorMenu
