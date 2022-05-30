import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 60px;
  height: 120px;
  border-radius: 30px;
  background-color: ${AppColors.BLUE};
  margin-left: 15px;
  padding: 10px 0px;

  justify-content: space-around;
  align-items: center;
`

export const ItemTime = styled.Text`
  font-size: 10px;
  color: ${AppColors.WHITE};
`
export const ItemTemp = styled.Text`
  font-size: 10px;
  color: ${AppColors.WHITE};
`
