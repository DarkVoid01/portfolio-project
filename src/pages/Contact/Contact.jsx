import React from 'react'
import Cursor from '../../components/Cursor/Cursor'
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.scss"
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';
const Contact = () => {
  const [state, handleSubmit] = useForm("mvojakba");
  if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
  }
  return (
    <div className='contact'>
      <div className="wrapper">
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
             <label htmlFor="Service">
              Service
            </label>
            <input
              id="service"
              type="text" 
              name="service"
            />
            <label htmlFor="Message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
        </form>
       </div>
       </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Contact