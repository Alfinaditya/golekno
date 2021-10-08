import styled from 'styled-components'
import { ContentButton } from './Contents'

export const NewsLetterSection = styled.div`
  margin-bottom: 200px;
`
export const NewsLetterContainer = styled.div`
  background: var(--jumbotron-color);
  width: 70%;
  margin: auto;
  padding: 85px 0;
  text-align: center;
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
