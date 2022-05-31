import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 100%;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InfoContainer = styled.View``

export const Title = styled.Text`
  color: ${AppColors.WHITE};
  font-weight: bold;
  font-size: 24px;
`

export const TextDate = styled.Text`
  margin-top: 10px;
  color: ${AppColors.WHITE};
`
