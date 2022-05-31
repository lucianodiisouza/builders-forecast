export const getTranslatedDay = (date: string) => {
  const newDate = date.split(' ')
  const day = new Date(newDate[0]).getDay()
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][
    day
  ]
}
