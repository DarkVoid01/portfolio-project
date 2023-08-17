import React from 'react'
import "./Services.scss"
const Services = () => {

    const services = [
        {
            name: "ONE PAGER",
            price: "#2000"
        },
        {
            name: "CLASSIC WEBSITE",
            price: "#2000"
        },
        {
            name: "ECOMMERCE WEBSITE",
            price: "#2000"
        },
        {
            name: "UI / UX",
            price: "#2000"
        },
        {
            name: "SOCIAL MEDIA POST",
            price: "#2000"
        },
        {
            name: "GRAPHIC DESIGN",
            price: "#2000"
        },

    ]
  return (
    <div className='services'>
        <div className="heading">
            SERVICES
        </div>
        <div className="services-wrapper">
            {
                services.map(
                    no =>(
                        <div className="service">
                            <div className="service-type">
                                {no.name}
                            </div>
                            <div className="service-price">
                                {no.price}
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Services