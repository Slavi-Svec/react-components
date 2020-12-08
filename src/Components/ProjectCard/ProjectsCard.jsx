import React from 'react';
import ProjectButton from './ProjectButton/ProjectButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCodepen} from "@fortawesome/free-brands-svg-icons"
import './style.scss'


const ProjectCard = ({ variant, src, title, description, }) => {
  return (
    <>
    <section className="project">
      <section className="project__body">
        <div className={`project__${variant}`}>
          <img className="project__cardImage" src={src} alt="alternate"></img>
          <div className="project__textContainer">
            <h1 className="project__title">{title}</h1>
            <p className="projectDescription">{description}</p>
          </div>
        </div>
      </section>
    </section>
    </>
  )
}


export default ProjectCard