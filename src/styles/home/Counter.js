import styled from 'styled-components'

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
