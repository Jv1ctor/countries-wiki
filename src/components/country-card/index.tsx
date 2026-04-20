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

export const CountryCard = () => {
  return (
    <>
      <Card>
        <CardImage>
          <Flag src="https://flagcdn.com/w320/ci.png" alt="flag" />
        </CardImage>

        <CardContent>
          <Horizontal>
            <CountryName>France</CountryName>
            <Continent region="europe">Europe</Continent>
          </Horizontal>

          <DisplayFlow>
            <MapPinStyled src={MapPin} />
            <Capital>Paris</Capital>
          </DisplayFlow>

          <DisplayFlow>
            <PopulationPinStyled src={PopulationIcon} />
            <Population>
              <p>65.3M</p>
              <p>RESIDENTS</p>
            </Population>
          </DisplayFlow>
        </CardContent>
      </Card>
    </>
  )
}
