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
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      </link>
    <a href="/"><i class="material-icons md-48" >arrow_back</i></a>
            <h2>Alidays App</h2>
            <h3>Designed for <a href="http://www.alidays.it/" target="_blank">Alidays</a>, a travel company always striving to improve their experience through technology.</h3>
            <h3>The company developed app for travelers with an adventurous mind and an eye toward technology.</h3>
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
