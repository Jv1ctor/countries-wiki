import { api } from "../api"
import type { CountriesInfoDto } from "../dtos/countries-info.dto"
import type { ListCountriesDto } from "../dtos/list-countries.dto"
import { CountryFieldsInfo } from "../fields-info"

export const CountriesService = {
  async getAll(): Promise<ListCountriesDto> {
    const response = await api.get<ListCountriesDto>("all")

    return response.data
  },

  async getByRegion(region: string): Promise<ListCountriesDto> {
    const response = await api.get<ListCountriesDto>(`region/${region}`)
    
    return response.data
  },

  async getCountryByCode(code: string): Promise<CountriesInfoDto>{
    const response = await api.get<CountriesInfoDto>(`alpha/${code}`, {
      params: {
        fields: Object.values(CountryFieldsInfo).join(","),
      }
    })

    return response.data
  }
}
