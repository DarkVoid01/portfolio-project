import React from 'react'
import Cursor from '../../components/Cursor/Cursor'
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import "./Contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
       <Cursor/>
       <MarqueeComp/>
       <Navbar/>
       <div className="heading">
          Contact
       </div>
    </div>
  )
}

export default Contact