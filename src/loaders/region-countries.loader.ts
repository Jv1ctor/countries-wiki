import type { LoaderFunctionArgs } from "react-router"
import { CountriesService } from "../api/services/countries.service"

export const regionCountriesLoader = async ({ params }: LoaderFunctionArgs) => {
  const region = params.region

  if (!region) {
    throw new Response("Region não informada", { status: 400 })
  }
  
  const response = await CountriesService.getByRegion(region)
  return response
}
