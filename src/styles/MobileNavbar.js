import styled from 'styled-components'
import { BrandLink, NavLink } from './shared/Link'
import { Menu } from '@styled-icons/heroicons-solid'

export const MobileNav = styled.nav`
  background: var(--main-color);
  display: none;
  @media only screen and (max-width: 1064px) {
    display: block;
    position: relative;
  }
`
export const MobileNavStyledLink = styled(NavLink)`
  color: black;
  font-size: 19px;
  font-weight: 400;
  margin-top: 10px;
`
export const MobileBrandStyledLink = styled(BrandLink)`
  color: var(--main-color);
  margin-top: 10px;
`

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--jumbotron-color);
  position: absolute;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: 20px;
  border-radius: 6px;
  padding-left: 10px;
  padding-bottom: 10px;
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
`
export const HamburgerMenu = styled(Menu)`
  color: var(--main-color);
`
export const HamburgerMenuContainer = styled.div`
  width: 45px;
  height: 39px;
  background: #eeeeee;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 1;
  top: 25px;
  border-radius: 4px;
  margin-right: 20px;
`
