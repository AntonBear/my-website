import React from 'react'

function ProjectCard({ src, link, title , descr, altImage}) {
  return (
    <a href={link} target="_blank">
      <img class="hover" src={src} alt={altImage} />
      <h3>{title}</h3>
      <p> {descr} </p>
    </a>
  )
}

export default ProjectCard
