import { Link } from 'gatsby'
import styled from 'styled-components'

export const PropertiesSection = styled.div`
  margin-bottom: 200px;
`
export const PropertiesTitle = styled.h1`
  font-size: 44px;
  font-weight: bold;
  color: var(--main-color);
  text-align: center;
`
export const PropertiesDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  margin-bottom: 50px;
`
export const PropertiesContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const PropertiesLink = styled(Link)`
  color: #969696;
  font-size: 14px;
  margin-top: 50px;
  margin-left: auto;
  display: block;
  text-align: right;
  margin-right: 20px;
`
export const PropertyContainer = styled(Link)`
  margin: auto;
  text-decoration: none;
  display: block;
  color: black;
  width: 278px;
`
export const PropertyImage = styled.div`
  width: 278px;
  height: 367px;
  margin: auto;
`
export const PropertyTitle = styled.h1`
  font-weight: bold;
  font-size: 14px;
`
export const PropertyDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;
`
export const PropertyLocation = styled.p`
  font-weight: 300;
  font-size: 12px;
`
export const PropertyPrice = styled.p`
  font-weight: bold;
  color: var(--main-color);
  font-size: 14px;
`
