import { Link } from 'gatsby'
import styled from 'styled-components'

export const PropertyContainer = styled(Link)`
  width: 535.26px;
  display: block;
  margin-bottom: 60px;
  text-decoration: none;
  color: black;
`
export const PropertiesImage = styled.div`
  width: 100%;
  height: 373px;
  border-radius: 34px;
  &:hover {
    opacity: 0.3;
  }
`
export const PropertiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
  @media only screen and (max-width: 1064px) {
    justify-content: center;
  }
`
