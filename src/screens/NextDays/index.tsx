import { useEffect, useState } from 'react'
import { WeatherItem } from '../../components'
import useLocation from '../../hooks/useLocation'
import { useWeeklyWeather } from '../../hooks/useWeather'
import { AppColors } from '../../theme/GlobalStyles'
import { getTranslatedDay } from '../../utils/date'
import { Container, ScreenLabel } from './styles'

type WeatherDay = {
  day: string
  color: string
  icon: string
  temp: number
}
const NextDays = () => {
  const { getWeeklyWeather, weeklyWeather } = useWeeklyWeather()
  const [days, setDays] = useState<WeatherDay[]>()
  const { location } = useLocation()

  useEffect(() => {
    if (location) {
      getWeeklyWeather(location)
    }
  }, [location])

  const filterDays = () => {
    const eachDayWeather = weeklyWeather?.list?.map((day) => {
      return {
        day: getTranslatedDay(day.dt_txt),
        icon: 'sun',
        temp: day.main.temp,
        color: AppColors.YELLOW,
      }
    })

    const newItems: WeatherDay[] = []

    eachDayWeather?.forEach((day) => {
      if (!newItems.some((item) => item.day === day.day)) {
        newItems.push(day)
      }
    })

    setDays(newItems)
  }

  useEffect(() => {
    filterDays()
  }, [weeklyWeather])

  return (
    <Container>
      <ScreenLabel>Próximos 5 Dias</ScreenLabel>
      {!!days &&
        days.map((item, index) => {
          const data = {
            day: item.day,
            icon: 'sun',
            color: AppColors.YELLOW,
            temp: item.temp.toFixed(0),
          }
          return <WeatherItem key={index} {...data} />
        })}
    </Container>
  )
}

export default NextDays
