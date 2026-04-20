import { CountriesService } from "../api/services/countries.service"


export const allCountriesLoader = async () => {
  const response = await CountriesService.getAll()
  return response
}