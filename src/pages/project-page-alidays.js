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
            <p>I worked on designing and improving a number of features for the consumer and business facing mobile apps by:
Creating UX/UI designs and clear documentation to support
Owning the user experience and taking ownership of one or more parts of the user experience: mapping user journeys, writing user stories, designing interactions, present and defend designs to other team members and executive level stakeholders
Owning feature development  and guiding the team to the development of the designed user experience by interacting with the developers and fellow designers.</p>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <h3>First title</h3>
    <p>creating UX/UI designs and clear documentation to support
Owning the user experience and taking ownership of one or more parts of the user experience: mapping user journeys, writing user stories, designing interactions, present and defend designs to other team members and executive level stakeholders
Owning feature development  and guiding the team to the development of the designed user experience by interacting with the developers and fellow designers.</p>
    <img src="../images/wallpaper.jpg"></img>
    </div>
  </Layout>
)



export default ProjectPage
