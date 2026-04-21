import { useEffect, useRef, useState } from "react"
import type { ListCountriesDto } from "../api/dtos/list-countries.dto"
import { CountriesService } from "../api/services/countries.service"

export const useSearch = (allCountries: ListCountriesDto) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isSearch, setIsSearch] = useState(false)
  const [countries, setCountries] = useState<ListCountriesDto>([])

  const handleInput = async () => {
    const name = inputRef.current?.value.trim()
    if (!name) {
      setCountries(allCountries)
      return
    }

    try {
      setIsSearch(true)
      const response = await CountriesService.getCountryByName(name)
      setCountries(response)
    } catch (error) {
      console.error(error)
      setCountries(allCountries)
    } finally {
      setIsSearch(false)
    }
  }

  useEffect(() => {
    setCountries(allCountries)
  }, [allCountries])

  return {
    ref: inputRef,
    handle: handleInput,
    isSearch,
    countries,
  }
}
