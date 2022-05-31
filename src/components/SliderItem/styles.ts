import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

type ContainerProps = {
  isTheLast: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 60px;
  height: 120px;
  border-radius: 30px;
  background-color: ${AppColors.BLUE};
  margin-left: 15px;
  padding: 10px 0px;

  margin-right: ${({ isTheLast }) => (isTheLast ? '50px' : 0)};
  justify-content: space-around;
  align-items: center;
`

export const ItemTime = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: ${AppColors.WHITE};
`
export const ItemTemp = styled.Text`
  font-size: 12px;
  color: ${AppColors.WHITE};
`
