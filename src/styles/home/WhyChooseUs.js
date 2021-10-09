import styled from 'styled-components'
import {
  BadgeCheck,
  CurrencyDollar,
  UserGroup,
  CursorClick,
  ArrowCircleUp,
} from '@styled-icons/heroicons-solid'

export const WhyChooseUsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0;
  @media only screen and (max-width: 768px) {
    margin: 100px 0;
  }
`
export const WhyChooseUsImage = styled.div`
  width: 401px;
  height: 577px;
  margin-right: 100px;
  @media only screen and (max-width: 1024px) {
    margin-right: 40px;
  }
  @media only screen and (max-width: 1002px) {
    display: none;
  }
`
export const WhyChooseUsTitle = styled.h1`
  font-size: 63px;
  margin-bottom: 88px;
  color: var(--main-color);
  @media only screen and (max-width: 536px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 428px) {
    font-size: 32px;
  }
`
export const WhyChooseUsReasonTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: var(--black-color);
  margin-top: 20px;
`
export const WhyChooseUsReasonDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #b6b5b5;
  width: 247px;
`
export const WhyChooseUsReasons = styled.div``
export const Reasons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 536px) {
    flex-direction: column;
  }
`
export const WhyChooseUsReasonContainer = styled.div`
  margin-bottom: 40px;
`
export const ReasonOne = styled(Reasons)`
  margin-bottom: 100px;
  @media only screen and (max-width: 536px) {
    margin-bottom: 0px;
  }
`
export const ReasonTwo = styled(Reasons)``
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
