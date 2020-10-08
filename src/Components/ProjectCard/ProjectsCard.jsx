import React from 'react';
import ProjectButton from './ProjectButton/ProjectButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCodepen} from "@fortawesome/free-brands-svg-icons"
import './style.scss'


const ProjectCard = ({title, src, description, variant}) => {
  return (
    <>
    <section className="project">
      <section className="project__Body">
        <div className={`project__${variant}`}>
          <img className="projectCardImage" src={src} alt="alternate"></img>
          <div className="textContainer">
            <h1 className="projectTitle">{title}</h1>
            <p className="projectDescription">{description}</p>
            <ProjectButton
              className="CodePenButton"
              heading="view on codepen"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </section>
    </>
  )
}


export default ProjectCard