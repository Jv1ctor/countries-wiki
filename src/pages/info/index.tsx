import {
  FaArrowLeft,
  FaCompass,
  FaGlobeAmericas,
  FaMoneyBill,
  FaQrcode,
  FaRulerCombined,
} from "react-icons/fa"
import { Container } from "../../styles/container"
import {
  BackBtnWrapper,
  ContainerCard,
  CountryNameCommon,
  CountryNameOfficial,
  FieldContent,
  FieldName,
  FieldWrapper,
  Flag,
  FlagWrapper,
  Horizontal,
  IconWrapper,
  Left,
  Right,
} from "./styles"

import { PiBuildingApartmentFill } from "react-icons/pi"
import { FaPeopleGroup } from "react-icons/fa6"
import { IoLanguage } from "react-icons/io5"
import { useLoaderData } from "react-router"
import type { CountriesInfoDto } from "../../api/dtos/countries-info.dto"
import { formatterLanguageField } from "../../helpers/formatter-language-field.helper"
import { formatterCurrencyFields } from "../../helpers/formatter-currency-field.helper"

export const Info = () => {
  const response = useLoaderData<CountriesInfoDto>()

  const formatter = new Intl.NumberFormat("pt-BR")

  const languages = formatterLanguageField(response.languages)

  const currencies = formatterCurrencyFields(response.currencies)

  return (
    <>
      <Container>
        <BackBtnWrapper to="/">
          <FaArrowLeft />
          <span>Voltar</span>
        </BackBtnWrapper>

        <FlagWrapper>
          <Flag src={response.flags.png} alt={response.flags.alt} />
        </FlagWrapper>

        <CountryNameOfficial>{response.name.official}</CountryNameOfficial>
        <CountryNameCommon>{response.name.common}</CountryNameCommon>

        <ContainerCard>
          <Left>
            <Horizontal>
              <IconWrapper>
                <PiBuildingApartmentFill />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Capital</FieldName>
                <FieldContent>{response.capital[0]}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <FaGlobeAmericas />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Continent</FieldName>
                <FieldContent>{response.continents[0]}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <FaCompass />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Sub-Region</FieldName>
                <FieldContent>{response.subregion}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <FaRulerCombined />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Area</FieldName>
                <FieldContent>{formatter.format(response.area)} km²</FieldContent>
              </FieldWrapper>
            </Horizontal>
          </Left>

          <Right>
            <Horizontal>
              <IconWrapper>
                <FaPeopleGroup />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Population</FieldName>
                <FieldContent>{formatter.format(response.population)}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <IoLanguage />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Languages</FieldName>
                <FieldContent>{languages}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <FaMoneyBill />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Currency</FieldName>
                <FieldContent>{currencies}</FieldContent>
              </FieldWrapper>
            </Horizontal>

            <Horizontal>
              <IconWrapper>
                <FaQrcode />
              </IconWrapper>
              <FieldWrapper>
                <FieldName>Country Code</FieldName>
                <FieldContent>{ response.cca3 }</FieldContent>
              </FieldWrapper>
            </Horizontal>
          </Right>
        </ContainerCard>
      </Container>
    </>
  )
}
