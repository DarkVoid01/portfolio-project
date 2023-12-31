import React from 'react'
import "./Banner.scss"
import BannerImage from '../BannerImage/BannerImage'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="main-text">
            I'M ARNOLD
        </div>
        <div className="minor-text">
        A WEB DEVELOPER, UI/ UX DESIGNER AND GRAPHIC DESIGNER FROM NIGERIAN, I DO NOT HAVE A SPECIFIC DESIGN PREFERENCES BUT
        I LIKE TO TRY OUT DIFFERENT TRENDS AND PICK THE BEST FOR YOUR COMPANY. 
        </div>
        <BannerImage/>
      
    </div>
  )
}

export default Banner