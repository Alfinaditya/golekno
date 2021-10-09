import styled from 'styled-components'
import { Button } from '../shared/Button'

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
  @media only screen and (max-width: 524px) {
    margin: auto;
    width: 80%;
  }
`
export const ContentText = styled.div`
  width: 701px;
  @media only screen and (max-width: 896px) {
    width: 500px;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`
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
  @media only screen and (max-width: 896px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;
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
  @media only screen and (max-width: 896px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`
export const ContentTitle = styled.h1`
  font-size: 44px;
  color: var(--main-color);
  width: 514px;
  margin-bottom: 20px;
  line-height: 115%;
  @media only screen and (max-width: 896px) {
    margin-top: 70px;
  }
  @media only screen and (max-width: 896px) {
    margin-top: 70px;
  }
  @media only screen and (max-width: 524px) {
    font-size: 25px;
    width: 100%;
  }
`
export const ContentDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  width: 424px;
  @media only screen and (max-width: 896px) {
    width: 100%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 524px) {
    margin: auto;
    width: 90%;
  }
`
export const ContentButton = styled(Button)`
  margin-top: 20px;
  @media only screen and (max-width: 896px) {
    margin-top: 30px;
  }
`
