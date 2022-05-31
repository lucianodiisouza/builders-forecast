import styled from 'styled-components/native'
import { AppColors } from '../../theme/GlobalStyles'

export const Container = styled.View`
  flex: 1;
  background-color: ${AppColors.WHITE};
  padding: 10px 20px;
`

export const WeatherItem = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
`

export const WeatherItemLabel = styled.Text`
  font-size: 16px;
`

export const TempContainer = styled.View`
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TemperatureLabel = styled.Text`
  font-size: 16px;
`

export const ScreenLabel = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${AppColors.DARK_BLUE};
  margin-bottom: 48px;
`
