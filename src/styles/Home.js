import styled from 'styled-components'
import {
  BadgeCheck,
  CurrencyDollar,
  UserGroup,
  CursorClick,
  ArrowCircleUp,
} from '@styled-icons/heroicons-solid'
import { Link } from 'gatsby'
import { Button } from './shared/Button'

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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const HeroText = styled.div`
  width: 469px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`
export const HeroImage = styled.div`
  width: 624px;
  height: 523px;
  @media only screen and (max-width: 1144px) {
    width: 426px;
    height: 498px;
  }
  @media only screen and (max-width: 1144px) {
    width: 624px;
    height: 523px;
  }
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
  @media only screen and (max-width: 768px) {
    margin-top: 550px;
  }
`
export const WhyChooseUsImage = styled.div`
  width: 401px;
  height: 577px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
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

// Counter

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--jumbotron-color);
  margin-bottom: 57px;
  height: 356px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    /* padding: 20px 0; */
  }
`
export const PropertiesCountContainer = styled.div`
  margin-right: 20px;
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 20px;
    margin: 0;
  }
`
export const CustomersCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  width: 327px;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
`
export const LocationsCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export const StatisticCount = styled.h1`
  color: var(--main-color);
`

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

  @media only screen and (max-width: 1270px) {
    width: 500px;
    height: 323px;
  }
  @media only screen and (max-width: 768px) {
    margin: auto;
    margin-bottom: 40px;
    width: 95%;
  }
`
export const ContentText = styled.div``
export const ContentOne = styled.div`
  display: flex;
  align-items: center;
  background: var(--jumbotron-color);
  margin-bottom: 200px;
  padding: 30px;
  justify-content: center;
  div:nth-child(1) {
    margin-right: 60px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    div:nth-child(1) {
      margin-right: 0;
      margin-left: 0;
    }
  }
`
export const ContentTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
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
export const ContentButton = styled(Button)`
  margin-top: 20px;
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

// NewsLetter

export const NewsLetterSection = styled.div`
  margin-bottom: 200px;
`
export const NewsLetterContainer = styled.div`
  background: var(--jumbotron-color);
  width: 70%;
  margin: auto;
  padding: 85px 0;
  text-align: center;
  background: red;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`
export const NewsLetterTitle = styled.h1`
  font-size: 25px;
  color: var(--main-color);
`
export const NewsLetterInput = styled.input`
  padding: 20px;
  /* width: 543px; */

  width: 50%;
  border: 1px solid #e7e7e7;
  outline: none;
  font-family: 'Poppins', sans-serif;
  border-radius: 13px;
  border-right: 0px solid;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`

export const NewsLetterButton = styled(ContentButton)`
  padding: 20px 30px;
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
export const ArrowCircleUpIcon = styled(ArrowCircleUp)`
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--main-color);
`
