import axios from "axios"
import { CountryFieldsList } from "./fields-list"

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  timeout: 10000,
  params: {
    fields: Object.values(CountryFieldsList).join(","),
  },
})
