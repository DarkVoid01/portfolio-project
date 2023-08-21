import React from 'react'
import "./Projects.scss"
import Banner from '../../components/Banner/Banner'
import "./Projects.scss"
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from "./Portfolio"
import { useState, useEffect } from 'react'
import Cursor from '../../components/Cursor/Cursor'
import Footer from '../../components/Footer/Footer'

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = Portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <div className='projects'>
      <Cursor/>
      <MarqueeComp/>
      <Navbar/>
      <div className="heading">
        Projects
      </div>
      <div className="project-types">
        <div className="type"  active={filter === "all"} onClick={() => setFilter("frontend")}>
          <div className="type-container">
            WEBSITES
          </div>
        </div>
        <div className="type"  active={filter === "all"} onClick={() => setFilter("sm-posts")}>
          <div className="type-container">
            SM POSTERS
          </div>
        </div>
        <div className="type" active={filter === "all"} onClick={() => setFilter("posters")}>
          <div className="type-container">
            POSTERS
          </div>
        </div>
        <div className="type" active={filter === "all"} onClick={() => setFilter("covers")}>
          <div className="type-container">
            COVERS
          </div>
        </div>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? 
          <div className="container">
            <div className="image">

            </div>
            <div className="name">
              {item.name}
            </div>
            <div className="info">
               <div className="description">
                  {item.description}
               </div>
               <div className="link">
                  <a href={item.link}>Link</a>
               </div>
            </div>
          </div>
          : ""
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default Projects