const useDate = () => {
  const today = new Date()

  const dayIndex = today.getDay()
  const monthIndex = today.getMonth()

  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ][monthIndex]

  const day = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ][dayIndex]

  return `${day}, ${today.getUTCDate()} de ${month}`
}

export default useDate
