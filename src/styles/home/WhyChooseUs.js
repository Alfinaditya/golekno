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
  justify-content: space-around;
  margin: 200px 0;
`
export const WhyChooseUsImage = styled.div`
  width: 401px;
  height: 577px;

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
