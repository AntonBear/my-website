import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../common/ProjectCard'
import theFirstProject from '../assets/boeing-737.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Pet Projects</h1>
      <div className={styles.projects}>
        <ProjectCard
          src={theFirstProject}
          link={'https://antonbear.github.io/responsive-site/'}
          title={'responsive-site'}
          descr={'FLOAT / GRID / SASS'}
          altImage={'theFirstProject'}
        />
      </div>
    </section>
  )
}

export default Projects
