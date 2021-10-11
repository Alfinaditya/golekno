import styled from 'styled-components'
import { NavLink } from './shared/Link'

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
export const ErrorCtaLink = styled(NavLink)`
  font-size: 15px;
  font-weight: bold;
  color: var(--main-color);
`
export const ErrorStatusNumber = styled.h1`
  font-weight: bold;
  font-size: 72px;
`
export const ErrorDescription = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 20px;
`
