import React from 'react'
import "./About.scss"
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'


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
            <div className="text">
              content
            </div>
          </div>
          <div className="image">
            image
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About