import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  width: 100%;
  padding: 20px;

  align-items: center;
  justify-content: center;
`
export const WeatherDay = styled.Text`
  color: ${AppColors.WHITE};
  font-size: 24px;
  font-weight: 600;
`
export const PrevisionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`
export const TempText = styled.Text`
  color: ${AppColors.WHITE};
  font-size: 48px;
  font-weight: 700;
  margin-left: 10px;
`
export const WeatherType = styled.Text`
  color: ${AppColors.WHITE};
  font-size: 14px;
  margin-top: 10px;
  text-transform: capitalize;
`
