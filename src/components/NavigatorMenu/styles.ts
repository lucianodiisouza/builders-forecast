import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  flex-direction: row;
  padding-left: 25px;
  margin-bottom: 30px;
`

export const OptionContainer = styled.View`
  margin-right: 20px;
`

export const Option = styled(TouchableWithoutFeedback)`
  margin-right: 10px;
`

type LabelProps = {
  isActive?: boolean
}
export const Label = styled.Text<LabelProps>`
  color: ${({ isActive }) =>
    isActive ? AppColors.WHITE : AppColors.DARK_GRAY};
  font-weight: 500;
`
