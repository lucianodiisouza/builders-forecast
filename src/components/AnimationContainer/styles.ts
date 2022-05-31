import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: column-reverse;
  align-items: center;
`

export const Label = styled.Text`
  color: ${AppColors.DARK_BLUE};
`
