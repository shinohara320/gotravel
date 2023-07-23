import React from 'react'
import { KknPage, Statistic, Article, CollagePhoto, Footer, NavBar, Team } from '../components'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Statistic />
      <KknPage />
      <Article />
      <CollagePhoto />
      <Team />
      <Footer />
    </div>
  )
}

export default HomePage