import { WeeklyWeatherResponse } from '../hooks/types'
import { AppColors } from '../theme/GlobalStyles'
import { getDay, getHour } from './date'

const tomorrowFilter = (weeklyWeather: WeeklyWeatherResponse) => {
  const tomorrow = new Date().getDay() + 1

  const tomorrowWeather = weeklyWeather.list.map((day) => {
    if (getDay(day.dt_txt) === tomorrow) {
      return {
        time: getHour(day.dt_txt),
        icon: day.weather[0].main,
        temp: day.main.temp.toFixed(0),
        color: AppColors.YELLOW,
      }
    }
  })

  return tomorrowWeather.filter((item) => item !== undefined)
}

export default tomorrowFilter
