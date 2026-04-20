import { useLoaderData } from "react-router"
import { CountryCard } from "../../components/country-card"
import { Container } from "../../styles/container"
import { ListCountries, NavLinkStyled, SubTitle, Title } from "./styles"
import type { AllCountries } from "../../api/dtos/all-countries.dto"

export const Home = () => {
  const allCountries = useLoaderData<AllCountries>()

  return (
    <Container>
      <Title>Explore the Atlas</Title>
      <SubTitle>
        A curated digital archive of sovereign nations and cultures
      </SubTitle>

      <ListCountries>
        {allCountries.map((country) => (
          <NavLinkStyled
            key={country.name.common}
            to={`/country/${country.name.common}`}
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
