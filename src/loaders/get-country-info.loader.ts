import type { LoaderFunctionArgs } from "react-router"
import { CountriesService } from "../api/services/countries.service"

export const getCountryInfo = async ({ params }: LoaderFunctionArgs) => {
  const code = params.code

  if (!code) {
    throw new Response("code snão informada", { status: 400 })
  }

  const response = await CountriesService.getCountryByCode(code)
  return response
}
