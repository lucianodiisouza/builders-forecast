import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  flex: 1;
  background-color: ${AppColors.WHITE};
  padding: 10px 20px;
`

export const ScreenLabel = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${AppColors.DARK_BLUE};
  margin-bottom: 48px;
`
