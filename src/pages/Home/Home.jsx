import React from 'react'
import Banner from '../../components/Banner/Banner'
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects'
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'

const Home = () => {
  return (
    <div className='home'>
        <Cursor/>
       <MarqueeComp/>
       <Navbar/>
      <Banner/>
      <FeaturedProjects/>
    </div>
  )
}

export default Home