import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
        <h2>Project title</h2>
        <h3>Project subtitle very long a few lines actually to describe all the goodness</h3>
        <h5>Gatsby uses hot reloading to speed up your development process. Essentially, when you’re running a Gatsby development server</h5>
        </div>
        </div>
      </div>
  </Layout>
)

export default ProjectPage
