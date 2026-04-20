import {
  Container,
  Content,
  Copyright,
  Left,
  Link,
  Right,
  Title,
} from "./styles"

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Title>WikiCountries</Title>
          <Copyright>
            © 2024 WIKICOUNTRIES. THE DIGITAL
            CONTOUR. ALL RIGHTS
            RESERVED.
          </Copyright>
        </Left>

        <Right>
          <Link>ABOUT THE ATLAS</Link>
          <Link>METHODOLOGY</Link>
          <Link>DATA SOURCES</Link>
          <Link>PRIVACY POLICY</Link>
        </Right>
      </Content>
    </Container>
  )
}
