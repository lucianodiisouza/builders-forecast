import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  flex-direction: row;
  padding-left: 25px;
  margin-bottom: 20px;
`

export const Option = styled.Pressable`
  margin-left: 20px;
`

export const Label = styled.Text`
  color: ${AppColors.WHITE};
  font-weight: 500;
`
export const NextDaysLabel = styled.Text`
  color: ${AppColors.GRAY};
  font-weight: 500;
`
