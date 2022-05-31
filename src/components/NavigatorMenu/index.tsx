import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, Option, Label, OptionContainer } from './styles'

type Props = {
  active: 'hoje' | 'amanha'
  setActive: (active: 'hoje' | 'amanha') => void
}

const NavigatorMenu = ({ active, setActive }: Props) => {
  return (
    <Container>
      <OptionContainer>
        <Option onPress={() => setActive('hoje')}>
          <Label isActive={active === 'hoje'}>Hoje</Label>
        </Option>
      </OptionContainer>

      <OptionContainer>
        <Option style={{ marginLeft: 15 }}>
          <Label
            onPress={() => setActive('amanha')}
            isActive={active === 'amanha'}
          >
            Amanhã
          </Label>
        </Option>
      </OptionContainer>

      <OptionContainer>
        <Option>
          <Label>
            Próximos 7 dias{' '}
            <Icon size={16} color={AppColors.DARK_GRAY} name='arrow-right' />
          </Label>
        </Option>
      </OptionContainer>
    </Container>
  )
}

export default NavigatorMenu
