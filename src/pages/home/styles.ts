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
