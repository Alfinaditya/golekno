import styled from 'styled-components'
import {
  BadgeCheck,
  CurrencyDollar,
  UserGroup,
  CursorClick,
} from '@styled-icons/heroicons-solid'

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
export const WhyChooseUsReasons = styled.div``
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
