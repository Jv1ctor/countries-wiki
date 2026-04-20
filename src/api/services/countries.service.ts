import { api } from "../api"
import type { ListCountriesDto } from "../dtos/list-countries.dto"

export const CountriesService = {
  async getAll(): Promise<ListCountriesDto> {
    const response = await api.get<ListCountriesDto>("all")

    return response.data
  },

  async getByRegion(region: string): Promise<ListCountriesDto> {
    const response = await api.get<ListCountriesDto>(`region/${region}`)
    
    return response.data
  } 
}
