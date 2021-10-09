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
    margin-bottom: 100px;
    justify-content: space-between;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    height: 100%;
  }
`
export const StatisticsContainer = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 40px;
    padding-top: 20px;
  }
`
export const PropertiesCountContainer = styled(StatisticsContainer)`
  margin-right: 20px;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    margin: 0;
  }
`
export const CustomersCountContainer = styled(StatisticsContainer)`
  margin-right: 20px;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    margin: 0;
    border-bottom: 1px solid #f2f2f2;
  }
`
export const LocationsCountContainer = styled(StatisticsContainer)``
export const StatisticCount = styled.h1`
  color: var(--main-color);
`
