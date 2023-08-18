import React from 'react'
import Banner from '../../components/Banner/Banner'
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects'
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Cursor/>
       <MarqueeComp/>
       <Navbar/>
      <Banner/>
      <FeaturedProjects/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home