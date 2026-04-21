import { NavLink } from "react-router"
import styled from "styled-components"


export const BackBtnWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-block: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary };
  &:hover{
    color: #3d59b5;
    transition: .3s ease-out;
  }
`

export const FlagWrapper = styled.div`
  width: 50%;
`

export const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`

export const CountryNameOfficial = styled.h1`
  margin-top: 1rem;
  text-transform: capitalize;
  font-family: serif;
  color: #020202;
`

export const CountryNameCommon = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.925rem;
  margin-top: 0.2rem;
`

export const ContainerCard = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const CardBase = styled.div`
  background-color: #f7f7f8;
  border-radius: 8px;
  padding: 2.5rem 3rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const Left = styled(CardBase)``

export const Right = styled(CardBase)``

export const Horizontal = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #e8e9eb;
  border-radius: 50%;
  font-size: 1.3rem;
  color: #1a202c;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const FieldName = styled.p`
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a0aec0;
`

export const FieldContent = styled.p`
  font-size: 1.15rem;
  font-family: serif;
  color: #1a202c;
  font-weight: 400;
`
