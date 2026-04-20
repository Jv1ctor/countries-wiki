import {
  Capital,
  Card,
  CardContent,
  CardImage,
  Continent,
  CountryName,
  DisplayFlow,
  Flag,
  Horizontal,
  MapPinStyled,
  Population,
  PopulationPinStyled,
} from "./styles"

import MapPin from "../../assets/icons/map-pin.svg"
import PopulationIcon from "../../assets/icons/population.svg"
import { formatterNumber } from "../../helpers/formatter-number.helper"
import { formatterRegion } from "../../helpers/formatter-region.helper"

type Props = {
  flag: string
  flagAlt: string
  name: string
  region: string
  capital: string
  population: number
}

export const CountryCard = ({
  capital,
  flag,
  flagAlt,
  name,
  population,
  region,
}: Props) => {
  const formattedRegion = formatterRegion(region)
  const formattedPopulation = formatterNumber(population)

  return (
    <>
      <Card>
        <CardImage>
          <Flag src={flag} alt={flagAlt} />
        </CardImage>

        <CardContent>
          <Horizontal>
            <CountryName>{name}</CountryName>
            <Continent region={formattedRegion}>{formattedRegion}</Continent>
          </Horizontal>

          <DisplayFlow>
            <MapPinStyled src={MapPin} />
            <Capital>{capital}</Capital>
          </DisplayFlow>

          <DisplayFlow>
            <PopulationPinStyled src={PopulationIcon} />
            <Population>
              <p>{formattedPopulation}</p>
              <p>RESIDENTS</p>
            </Population>
          </DisplayFlow>
        </CardContent>
      </Card>
    </>
  )
}
