import { CountryCard } from "../../components/country-card"
import { Container } from "../../styles/container"
import { SubTitle, Title } from "./styles"

export const Home = () => {
  return (
    <Container>
      <Title>Explore the Atlas</Title>
      <SubTitle>
        A curated digital archive of sovereign nations and cultures
      </SubTitle>


      <div>
        <CountryCard />
      </div>


    </Container>
  )
}
