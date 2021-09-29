import styled from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  background: var(--main-color);
`
export const NavStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 19px;
  font-weight: 400;
`
export const BrandLink = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: var(--cta-text-color);
`
export const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`
export const ContainerNavStyledLink = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
