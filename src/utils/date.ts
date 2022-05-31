export const getTranslatedDay = (date: string) => {
  const newDate = date.split(' ')
  const day = new Date(newDate[0]).getDay()
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][
    day
  ]
}

export const getHour = (date: string) => {
  const newDate = date.split(' ')
  const time = newDate[1]
  return time.split(':')[0]
}

export const getDay = (date: string) => {
  const newDate = date.split(' ')
  const day = newDate[0].split('-')[2]
  return Number(day)
}

export const getDayByDayNumber = (day: number) => {
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][
    day
  ]
}
