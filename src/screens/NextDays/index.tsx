import { useContext, useEffect, useState } from 'react'
import { AnimationContainer, WeatherItem } from '../../components'
import { WeatherContext } from '../../contexts/weather'
import { AppColors } from '../../theme/GlobalStyles'
import { getTranslatedDay } from '../../utils/date'
import { Container, ScreenLabel } from './styles'
import { WeatherDay } from './types'

const NextDays = () => {
  const { weeklyWeather } = useContext(WeatherContext)
  const [days, setDays] = useState<WeatherDay[]>()

  const filterDays = () => {
    const eachDayWeather = weeklyWeather?.list?.map((day) => {
      return {
        day: getTranslatedDay(day.dt_txt),
        icon: day.weather[0].main,
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

    newItems.shift()

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
            icon: item.icon,
            color: AppColors.YELLOW,
            temp: item.temp.toFixed(0),
          }
          return <WeatherItem key={index} {...data} />
        })}
    </Container>
  )
}

export default NextDays
