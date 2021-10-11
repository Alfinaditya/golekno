import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import Contents from '../components/home/Contents'
import Reviews from '../components/home/Reviews'
import NewsLetter from '../components/home/NewsLetter'
import Properties from '../components/home/Properties'
import WhyChooseUs from '../components/home/WhyChooseUs'
import GotoTopButton from '../components/GotoTopButton'
import Counter from '../components/home/Counter'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <div>
      <Layout>
        <Seo title='Home' />
        <Hero />
        <WhyChooseUs />
        <Counter />
        <Properties />
        <Contents />
        <Reviews />
        <NewsLetter />
        <GotoTopButton />
      </Layout>
    </div>
  )
}
