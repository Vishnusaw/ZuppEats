import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heorSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCartd'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
// import Layout from '../../components/index'
// import HeroSection from '../../components/index'
// import Category from '../../components/index'

export default function HomePage() {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
    </Layout>
  )
}
