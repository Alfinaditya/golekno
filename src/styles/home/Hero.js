import styled from 'styled-components'

export const HeroSection = styled.div``
export const HeroOverlay = styled.div`
  background: var(--main-color);
  position: absolute;
  width: 100%;
  height: 510px;
  z-index: -1;
`
export const HeroContainer = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;

  @media only screen and (max-width: 1134px) {
    flex-direction: column;
  }
`
export const HeroText = styled.div`
  width: 469px;
  @media only screen and (max-width: 1134px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 472px) {
    width: 80%;
  }
  @media only screen and (max-width: 428px) {
    width: 90%;
  }
`
export const HeroImage = styled.div`
  width: 624px;
  height: 523px;
  @media only screen and (max-width: 630px) {
    width: 300px;
    height: 305px;
  }
`
export const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: var(--cta-text-color);
  @media only screen and (max-width: 472px) {
    font-size: 49px;
  }
`
export const HeroDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin-top: 20px;
  color: #e1e1e1;
`
