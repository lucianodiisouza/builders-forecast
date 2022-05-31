import { NavigationProp, useNavigation } from '@react-navigation/core'
import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, Option, Label } from './styles'
import { NavigationMenuProps, NextDaysScreen } from './types'

const NavigatorMenu = ({ active, setActive }: NavigationMenuProps) => {
  const navigation = useNavigation<NavigationProp<NextDaysScreen>>()

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

      <Option onPress={() => navigation.navigate('NextDays')}>
        <Label>
          Próximos 7 dias
          <Icon size={16} color={AppColors.GRAY} name='arrow-right' />
        </Label>
      </Option>
    </Container>
  )
}

export default NavigatorMenu
