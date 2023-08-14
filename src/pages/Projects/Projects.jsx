import React from 'react'
import "./Projects.scss"
import Banner from '../../components/Banner/Banner'
import "./Projects.scss"
import MarqueeComp from '../../components/Marquee/MarqueeComp'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from "./Portfolio"
import { useState, useEffect } from 'react'
import Cursor from '../../components/Cursor/Cursor'

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
      <div className="project-types">
        <div className="type"  active={filter === "all"} onClick={() => setFilter("frontend")}>
          WEBSITES
        </div>
        <div className="type"  active={filter === "all"} onClick={() => setFilter("sm-posts")}>
          SM-POSTS
        </div>
        <div className="type" active={filter === "all"} onClick={() => setFilter("posters")}>
          POSTERS
        </div>
        <div className="type" active={filter === "all"} onClick={() => setFilter("covers")}>
          COVERS
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
                random stuff
            </div>
          </div>
          : ""
        )}
      </div>
    </div>
  )
}

export default Projects