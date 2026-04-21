export type CountriesInfoDto = {
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
  subregion: string
  area: number
  languages: Record<string, string>
  currencies: Record<
    string,
    {
      name: string
      symbol: string
    }
  >
}
