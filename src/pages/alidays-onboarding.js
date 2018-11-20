import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>App Onboarding Graphics</h2>
            <h3>Onboarding screens animations designed for the app, describing the various features while setting up the preferences.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <div className="Project-Images">
    <div>
      <img src="../images/alidays-onboarding1.gif"></img>
      <h6>Onboarding screens - #1 Around me </h6> 
    </div>
    <div>
      <img src="../images/alidays-onboarding2.gif"></img>
      <h6>Onboarding screens - #2 Save travel to wishlist </h6> 
    </div>
    <div>
      <img src="../images/alidays-onboarding3.gif"></img>
      <h6>Onboarding screens - #3 Explore all the different travel and experiences</h6> 
    </div>
    <div>
      <img src="../images/alidays-onboarding4.gif"></img>
      <h6>Onboarding screens - #4 Ask for a quote straight from the app </h6> 
    </div>
    <div>
      <img src="../images/alidays-onboarding5.gif"></img>
      <h6>Onboarding screens - #5 YAY! You're done setting up your preferences</h6> 
    </div>
    </div>
    </div>
  </Layout>
)



export default ProjectPage
