import { useLoaderData } from "react-router"
import { CountryCard } from "../../components/country-card"
import { Container } from "../../styles/container"
import { ListCountries, NavLinkStyled, SubTitle, Title } from "./styles"
import type { ListCountriesDto } from "../../api/dtos/list-countries.dto"

export const Home = () => {
  const allCountries = useLoaderData<ListCountriesDto>()
  const formatterUrl = (code: string) => `/country/${code}`

  return (
    <Container>
      <Title>Explore the Atlas</Title>
      <SubTitle>
        A curated digital archive of sovereign nations and cultures
      </SubTitle>

      <ListCountries>
        {allCountries.map((country) => (
          <NavLinkStyled
            key={country.cca3}
            to={formatterUrl(country.cca3)}
          >
            <CountryCard
              capital={country.capital[0]}
              flag={country.flags.png}
              flagAlt={country.flags.alt}
              name={country.name.common}
              population={country.population}
              region={country.continents[0]}
            />
          </NavLinkStyled>
        ))}
      </ListCountries>
    </Container>
  )
}
