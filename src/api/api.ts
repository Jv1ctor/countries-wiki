import axios from "axios"
import { CountryFields } from "./fields"

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  timeout: 1000,
  params: { 
    fields: Object.values(CountryFields).join(",")
  }
})
