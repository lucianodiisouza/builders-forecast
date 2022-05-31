export const convertCountryCodeToCountry = (countryCode: string) => {
  switch (countryCode) {
    case 'BR':
      return 'Brasil'
    case 'US':
      return 'United States'
    default:
      return countryCode
  }
}
