import { NavLink } from "react-router"
import styled from "styled-components"

export const Title = styled.h1`
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 3rem;
  font-family: serif;
  color: ${({ theme }) => theme.colors.secondary};
`

export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 1.3rem;
  font-variant: small-caps;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2.5rem;
` 

export const ListCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 4rem;
`

export const NavLinkStyled = styled(NavLink)`
  &:hover{
    transform: scale(1.1);
    transition: .4s ease-out;
  }
`

export const SearchWrapper = styled.div`
  margin-bottom: 2rem;
`
