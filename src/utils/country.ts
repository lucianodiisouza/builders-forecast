export const convertCountryCodeToCountry = (countryCode: string) => {
  switch (countryCode) {
    case 'BR':
      return 'Brasil'
    case 'US':
      return 'Estados Unidos'
    default:
      return countryCode
  }
}
