import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  CounterContainer,
  CustomersCountContainer,
  LocationsCountContainer,
  PropertiesCountContainer,
  StatisticCount,
} from '../../styles/Home'

const Counter = () => {
  const data = useStaticQuery(query)
  const counter = data.markdownRemark.frontmatter
  return (
    <CounterContainer>
      <PropertiesCountContainer>
        <StatisticCount>{counter.propertiesCount.count}</StatisticCount>
        <p>{counter.propertiesCount.name}</p>
      </PropertiesCountContainer>
      <CustomersCountContainer>
        <StatisticCount>{counter.customersCount.count}</StatisticCount>
        <p>{counter.customersCount.name}</p>
      </CustomersCountContainer>
      <LocationsCountContainer>
        <StatisticCount>{counter.locationsCount.count}</StatisticCount>
        <p>{counter.locationsCount.name}</p>
      </LocationsCountContainer>
    </CounterContainer>
  )
}
const query = graphql`
  query CounterQuery {
    markdownRemark(frontmatter: { name: { eq: "counter" } }) {
      id
      frontmatter {
        propertiesCount {
          name
          count
        }
        customersCount {
          name
          count
        }
        locationsCount {
          name
          count
        }
      }
    }
  }
`

export default Counter
