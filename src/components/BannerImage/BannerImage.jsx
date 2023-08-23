import React from 'react'
import "./BannerImage.scss"

const BannerImage = () => {
  return (
    <div className='banner-image'>
        <div className="wrapper">
        <div className="images-container">
            <div className="image-container">
              <div className="image">
                  <img src="../images/testing.jpeg"/>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
              <img src="../images/testing.jpeg"/>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
              <img src="../images/testing.jpeg"/>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
              <img src="../images/testing.jpeg"/>
              </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default BannerImage