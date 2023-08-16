import React from 'react'
import "./About.scss"
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'


const About = () => {
  return (
    <div className='about'>
        <Cursor/>
        <MarqueeComp/>
        <Navbar/>
        <div className="heading">
          About
        </div>
        <div className="about-me">
          <div className="content">
            content
          </div>
          <div className="image">
            image
          </div>
        </div>
    </div>
  )
}

export default About