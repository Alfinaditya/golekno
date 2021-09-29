import styled from 'styled-components'

export const HeroSection = styled.div`
  background: var(--main-color);
  height: 450px;
`
export const HeroContainer = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
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
