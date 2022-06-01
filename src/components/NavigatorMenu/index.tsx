import { NavigationProp, useNavigation } from '@react-navigation/core'
import { AppColors } from '../../theme/GlobalStyles'
import Icon from '../Icon'
import { Container, Option, Label, NextDaysLabel } from './styles'
import { NextDaysScreen } from './types'

const NavigatorMenu = () => {
  const navigation = useNavigation<NavigationProp<NextDaysScreen>>()

  return (
    <Container>
      <Label>Amanhã</Label>

      <Option onPress={() => navigation.navigate('NextDays')}>
        <NextDaysLabel>
          Próximos 5 dias{'   '}
          <Icon size={16} color={AppColors.GRAY} name='arrow-right' />
        </NextDaysLabel>
      </Option>
    </Container>
  )
}

export default NavigatorMenu
