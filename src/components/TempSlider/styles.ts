import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 100%;
  height: 170px;
  background: white;
  margin-left: 20px;
  margin-top: 40px;
`

export const ScrollContainer = styled.ScrollView`
  background-color: ${AppColors.DARK_BLUE};
  padding-left: 10px;
`

export const Item = styled.View`
  width: 60px;
  height: 120px;
  border-radius: 50%;
  background-color: ${AppColors.BLUE};
  margin-left: 15px;

  justify-content: center;
  align-items: center;
`
