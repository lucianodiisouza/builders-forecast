export const getIcon = (icon: string) => {
  const weatherIcon = icon.toLocaleLowerCase()

  switch (weatherIcon) {
    case 'clouds':
      return 'cloud'
    case 'cloud-rain':
      return 'cloud-rain'
    case 'rain':
      return 'cloud-drizzle'
    case 'sun':
      return 'sun'
    case 'wind':
      return 'wind'
    case 'clear':
      return 'sun'
    default:
      return 'wind'
  }
}
