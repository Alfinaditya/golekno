import styled from 'styled-components'

export const ReviewSection = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 200px;
`
export const ReviewContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 60%;
  @media only screen and (max-width: 524px) {
    width: 90%;
  }
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
