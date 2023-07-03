import React from 'react'
import { Article, CollagePhoto, Footer, Hero, NavBar, Pricing, Testimonials } from '../components'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Article />
      <CollagePhoto />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage