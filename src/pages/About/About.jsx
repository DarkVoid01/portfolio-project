import React from 'react'
import "./About.scss"
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import AboutImage from "./testing.jpeg"
import resume from "./resume.pdf"

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
              <p>
                Hey, My name is Arnold Eniola, a frontend web developer 
                and graphic designer from Nigeria. I started of as a
                designer when I was younger using MS Word to design
                book covers(Wasn't aware of any design software), as
                I grew older I realized I could make more out of design
                and I entered in web development.
              </p>
              <p>
                I hope to work on projects that will develop and
                improve my skill and having fun while doing them
              </p>
              <p>
                Download my resume <a download={resume}>R</a>
              </p>
            </div>
            
          </div>
          <div className="image">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About