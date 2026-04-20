import { api } from "../api"
import type { AllCountries } from "../dtos/all-countries.dto"

export const CountriesService = {
  async getAll(): Promise<AllCountries> {
    const route = await api.get<AllCountries>("all")

    return route.data
  },
}
