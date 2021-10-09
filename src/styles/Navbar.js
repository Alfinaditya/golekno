import styled, { css } from 'styled-components'
import { BrandLink, NavLink } from './shared/Link'

export const Nav = styled.nav`
  ${props =>
    props.location === 'home' &&
    css`
      background: var(--main-color);
    `}
`
export const NavStyledLink = styled(NavLink)`
  color: var(--main-color);
  ${props =>
    props.location === 'home' &&
    css`
      color: white;
    `}
`
export const BrandStyledLink = styled(BrandLink)`
  color: var(--main-color);
  ${props =>
    props.location === 'home' &&
    css`
      color: white;
    `}
`
export const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  @media only screen and (max-width: 1064px) {
    display: none;
  }
`
export const ContainerNavStyledLink = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
