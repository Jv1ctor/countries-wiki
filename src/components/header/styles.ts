import { NavLink } from "react-router"
import styled from "styled-components"

export const ContainerHeader = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transition: 0.3s ease-in;
  }
`
