import React from 'react'
import './FeaturedProjects.scss'
import { Link } from 'react-router-dom'
const FeaturedProjects = () => {

    const projects = [
        {
            name: "XIRI",
            task_details: "HTML, CSS, JS, UI/UX",
            background: "#181818",
            image: "../images/XIRI.jpg",
            height: "30%",
        },

        {
            name: "CGMI",
            task_details: "HTML, CSS, JS, UI/UX",
            background: "WHITE",
            image: "../images/CGMI.jpg",
            height: "50%",
        }
    ]
  return (
    <div className='featured-projects'>
        <div className="heading">
            PROJECTS
        </div>

          <div className="project-wrapper">
            {
                projects.map(
                    no =>(
                        <div className="project">
                        <div className="project-text">
                            <div className="name">
                                {no.name}
                            </div>
                            <div className="role">
                                <div className="task">
                                    Task
                                </div>
                                    <div className="task-details">
                                        {no.task_details}
                                    </div>
                            </div>
                        </div>
                        <div className="project-image" style={{backgroundColor: no.background}}>
                            <img src={no.image} alt="Featured Project" style={{height: no.height}} />
                        </div>
                    </div>
                    )
                )
            }
         
          </div>
          <div className="see-more">
            <Link to='/projects'>
                See more.
            </Link>
           
          </div>

    </div>
  )
}

export default FeaturedProjects