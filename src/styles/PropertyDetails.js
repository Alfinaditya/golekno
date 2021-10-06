import styled from 'styled-components'
import { Star } from '@styled-icons/heroicons-solid'
import { Button } from './shared/Button'

export const PropertyDetailsContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
`
export const PropertyDetailsTitle = styled.h1`
  color: black;
  font-size: 36px;
  font-weight: bold;
`
export const PropertyDetailsLocation = styled.p`
  font-size: 36px;
  font-weight: 400;
  font-size: 18px;
  color: #969696;
`
export const PropertyDetailsReview = styled.div`
  display: flex;
  align-items: center;
`
export const PropertyDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`
export const PropertyDetailsDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
`
export const PropertyDetailsPrice = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: var(--main-color);
`

export const PropertyDetailsButton = styled(Button)`
  margin: 40px 0;
`
export const CtaBack = styled.p`
  cursor: pointer;
  text-decoration: underline;
  color: var(--main-color);
`

export const StarIcon = styled(Star)`
  color: #ffb92d;
  width: 28px;
  height: 28px;
`
