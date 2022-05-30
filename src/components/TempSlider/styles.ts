import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 100%;
  height: 170px;
  margin-left: 20px;
`

export const ScrollContainer = styled.ScrollView`
  background-color: ${AppColors.DARK_BLUE};
  padding-left: 10px;
  border-radius: 30px;

  /* box-shadow: 1px 1px 5px 0px rgba(107, 152, 242, 1); */
`
