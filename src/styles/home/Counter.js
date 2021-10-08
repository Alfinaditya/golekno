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
  }
`
export const StatisticsContainer = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PropertiesCountContainer = styled(StatisticsContainer)`
  margin-right: 20px;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 20px;
    margin: 0;
  }
`
export const CustomersCountContainer = styled(StatisticsContainer)`
  margin-right: 20px;
  border-right: 1px solid #f2f2f2;
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
`
export const LocationsCountContainer = styled(StatisticsContainer)`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export const StatisticCount = styled.h1`
  color: var(--main-color);
`
