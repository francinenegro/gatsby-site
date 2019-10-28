import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page-copy.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      </link>
    <a href="/"><i class="material-icons md-48" >arrow_back</i></a>
      <h2>Soldo Mobile App</h2>
            <h3>Soldo Business is a payment platform that allows companies to control more efficiently their employees' spending.<br></br></h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
      
      <p>I worked on designing and improving a number of features for the consumer and business facing mobile apps by
Creating UX/UI designs and clear documentation to support</p>
<p>Owning the user experience and taking ownership of presenting and collaborating with the various stakeholders: mapping user journeys, writing user stories, designing interactions, present and defend designs to other team members and executive level stakeholders
Owning feature development  and guiding the team to the development of the designed user experience by interacting with the developers and fellow designers.</p>
    <img src="../images/soldo-mobile.png"></img>
</div>
  </Layout>
)

export default ProjectPage
