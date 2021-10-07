import styled from 'styled-components'

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
