import { t } from 'i18next'
import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <>
       <section className='projects'>
          <div className="container">
              <div className="project_title_wrapper">
                   <h2 className='projects_title'>{t("Navbar.projects")}</h2>
              </div>
          </div>
       </section>
    </>
  )
}

export default Projects
