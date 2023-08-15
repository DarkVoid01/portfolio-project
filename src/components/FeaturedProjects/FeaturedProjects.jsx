import React from 'react'
import './FeaturedProjects.scss'
import { Link } from 'react-router-dom'
const FeaturedProjects = () => {

    const projects = [
        {
            name: "Project 1",
            task_details: "Figma, UI/UX"
        },

        {
            name: "Project 2",
            task_details: "Figma, UI/UX"
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
                                    <div className="task-details">
                                        {no.task_details}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-image">
                            image
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