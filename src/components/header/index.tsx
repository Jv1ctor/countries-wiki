import { NavLink } from "react-router"
import { List, Title, ContainerHeader, StyledLink } from "./styles"

export const Header = () => {
  return (
    <ContainerHeader>

      <NavLink to="/">
        <Title>WikiCountries</Title>
      </NavLink>

      <nav>
        <List>
          <li>
            <StyledLink to={"/americas"}>Americas</StyledLink>
          </li>
          <li>
            <StyledLink to={"/asia"}>Asia</StyledLink>
          </li>
          <li>
            <StyledLink to={"/africa"}>Africa</StyledLink>
          </li>
          <li>
            <StyledLink to={"/europe"}>Europe</StyledLink>
          </li>
          <li>
            <StyledLink to={"/oceania"}>Oceania</StyledLink>
          </li>
        </List>
      </nav>
    </ContainerHeader>
  )
}
