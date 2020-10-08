import React from 'react';

const ProjectCard = ({className, src, title, }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <img className={className} src={src} alt="alternate"></img>
      </div>
    </>
  )
}


export default ProjectCard