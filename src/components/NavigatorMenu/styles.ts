import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  flex-direction: row;
  padding-left: 25px;
  margin-bottom: 30px;
`

export const Option = styled.Pressable`
  margin-right: 20px;
`

type LabelProps = {
  isActive?: boolean
}
export const Label = styled.Text<LabelProps>`
  color: ${({ isActive }) => (isActive ? AppColors.WHITE : AppColors.GRAY)};
  font-weight: 500;
`
