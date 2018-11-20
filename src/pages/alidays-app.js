import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'
import Card from '../components/card'
import staticdata from "../../staticdata.json"
import '../style/index.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Alidays App</h2>
            <h3>Company app for travelers with an adventurous mind and an eye toward technology.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <img src="../images/alidays-app1.jpg"></img>
    <img src="../images/alidays-app2.jpg"></img>
    <h6>Download from the App Store</h6>
    </div>
  </Layout>
)

export default ProjectPage
