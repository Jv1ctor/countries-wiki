export type CountriesDto = {
  cca3: string
  name: {
    common: string
    official: string
  }
  capital: string[]
  continents: string[]
  population: number
  flags: {
    png: string
    svg: string
    alt: string
  }
}
