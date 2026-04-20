import styled from "styled-components"
import { getRegionStyle, type Region } from "../../helpers/get-region-style.helper"

export const Card = styled.div`
  max-width: 300px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`

export const CardContent = styled.div`
  padding: 10px;
`

export const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  aspect-ratio: 3/2;
  border-radius: 10px 10px 0px 0px;
`

export const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DisplayFlow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.4rem;
`

export const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
`

export const CountryName = styled.h2`
  color: #0f0f0f;
  font-size: 1.5rem;
  font-family: serif;
  font-weight: 700;
`

export const Continent = styled.span<{ region: Region }>`
  color: ${({ region }) => getRegionStyle(region).color};
  background: ${({ region }) => getRegionStyle(region).background};
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const MapPinStyled = styled.img`
  width: 16px;
  height: 16px;
  color: #374151;
  opacity: 0.9;
`

export const PopulationPinStyled = styled.img`
  width: 20px;
  height: 20px;
  color: #374151;
  opacity: 0.9;
  margin-right: 5px;
`

export const Capital = styled.p`
  color: #374151;
  font-weight: 500;
  opacity: 0.85;
`

export const Population = styled.div`
  color: #1f1f1f;
  font-weight: 500;
  opacity: 0.6;
  display: flex;
  gap: 8px;
`
