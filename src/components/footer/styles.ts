import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 2rem 4rem;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`

export const Copyright = styled.p`
  font-size: 10px;
  line-height: 1.4;
  opacity: 0.8;
`

export const Right = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;
`

export const Link = styled.a`
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`
