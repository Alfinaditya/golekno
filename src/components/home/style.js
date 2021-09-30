import styled from 'styled-components'
import {
  BadgeCheck,
  CurrencyDollar,
  UserGroup,
  CursorClick,
} from '@styled-icons/heroicons-solid'
import { Link } from 'gatsby'

// Hero

export const HeroSection = styled.div`
  background: var(--main-color);
  height: 510px;
`
export const HeroContainer = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
`
export const HeroText = styled.div`
  width: 469px;
`
export const HeroImage = styled.div`
  width: 624px;
  height: 523px;
`
export const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: var(--cta-text-color);
`
export const HeroDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin-top: 20px;
  color: #e1e1e1;
`

// Why choose us

export const WhyChooseUsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 200px 0;
`
export const WhyChooseUsImage = styled.div`
  width: 401px;
  height: 577px;
`
export const WhyChooseUsTitle = styled.h1`
  font-size: 63px;
  margin-bottom: 88px;
  color: var(--main-color);
`
export const WhyChooseUsReasonTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: var(--black-color);
`
export const WhyChooseUsReasonDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #b6b5b5;
  width: 247px;
`
export const WhyChooseUsReasons = styled.div``

// Properties

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
  margin-left: auto;
  display: block;
  text-align: right;
  margin-right: 20px;
`
export const PropertyContainer = styled.div`
  margin: auto;
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
  margin-top: 20px;
`
export const PropertyDescription = styled.div`
  display: flex;
  align-items: center;
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
export const ReasonOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`
export const ReasonTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
// Contents

export const ContentsSection = styled.div`
  margin: auto;
  margin-bottom: 200px;
`
export const ContentImage = styled.div`
  width: 701px;
  height: 377px;
`
export const ContentText = styled.div``
export const ContentOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--jumbotron-color);
  margin-bottom: 200px;
  padding: 30px;
`
export const ContentTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const ContentTitle = styled.h1`
  font-size: 44px;
  color: var(--main-color);
  width: 514px;
  margin-bottom: 20px;
  line-height: 115%;
`
export const ContentDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  width: 424px;
`
export const ContentButton = styled.p`
  cursor: pointer;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  color: var(--cta-text-color);
  text-decoration: none;
  padding: 20px 55px;
  display: inline-block;
  border-radius: 8px;
  background: #647aff;
  transition: 1s;
  &:hover {
    background: var(--main-color);
  }
`
// Reviews

export const ReviewSection = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 200px;
`

export const ReviewContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 60%;
`
export const ReviewMessage = styled.p`
  margin: 30px 0;
`
export const ReviewName = styled.p`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 4px;
  color: var(--main-color);
`
export const ReviewJob = styled.p`
  color: var(--black-color);
  margin-bottom: 90px;
`
export const BadgeCheckIcon = styled(BadgeCheck)`
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--main-color);
`
export const CurrencyDollarIcon = styled(CurrencyDollar)`
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--main-color);
`
export const UsersGroupIcon = styled(UserGroup)`
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--main-color);
`
export const CursorClickIcon = styled(CursorClick)`
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--main-color);
`
