import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Internal Tool Design - Case Study</h2>
            <h3>Design a new, innovative web based application for internal use within the company, based on the assumptions of a new theoretical model developed internally. All in the sake of improving the workflow and reusability of data.</h3>
            
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <p>Development of the UX and product design of an internal tool aimed at speeding up and basically revolutionizing the way travel quotes are composed. The aim was to cut the corners where time was being wasted by either technological reasons or limitations due to the structure underlying the system.</p>
    <img src="../images/alidays-internal1.jpg"></img>
    <h3>THE LIMITATIONS</h3>
    <p>
Many were the limitations, including having to develop - along with the UI and UX - all the new services needed server-side. As usual, time was another constraint, as was the introduction of a completely new paradigm in the workflow of the employees, who had been using the same system for years. Additionally the ambition was to build a system that could grant as much flexibility as possible, allowing the user to perform any action on the items. </p>
    <img src="../images/alidays-internal2.jpg"></img>
    <h3>THE SOLUTION</h3>
    <p>We tried thinking outside the box with the help of the model we had come up with. We started designing around the variables of the model adding levels of complexity, in order to grant flexibility. 
This became one of our design principles during this project and sticked around also for other projects.</p>
    <img src="../images/alidays-internal3.jpg"></img>
    <h3>MY ROLE</h3>
    <p>I was involved in the project from the very start. 
I helped with refining the model on which we would base the entire platform, did the initial analysis (of both competitors and tools used by the operators). Then proceeded to design pen and paper wireframes, clickable prototype, high fidelity mockups, the UI kit and a style guide to help the FE-dev in his work.</p>  
    </div>
  </Layout>
)



export default ProjectPage
