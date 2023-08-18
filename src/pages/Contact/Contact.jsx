import React from 'react'
import Cursor from '../../components/Cursor/Cursor'
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import "./Contact.scss"
import Footer from '../../components/Footer/Footer'
const Contact = () => {
  return (
    <div className='contact'>
       <Cursor/>
       <MarqueeComp/>
       <Navbar/>
       <div className="heading">
          Contact
       </div>
       <div className="content">
       <div className="text">
         <div className="text-container">
          I am always open to new opportunities and projects you,
          my inbox is always open. You can also say hi, I will try to
          reply.
         </div>
       </div>
       <div className="form">
          form
       </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Contact