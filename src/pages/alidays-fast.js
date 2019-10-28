import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      </link>
    <a href="/"><i class="material-icons md-48" >arrow_back</i></a>
      <h2>Fast Booking</h2>
      <h3>Designed for <a href="http://www.alidays.it/" target="_blank">Alidays</a>, a travel company always striving to improve their experience through technology.</h3>
            <h3>This is an internal tool case study for a platform developed to speed up and aid the employees of the company in their daily tasks.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
      <h3>The Problem</h3>
      <p>The company needed  an internal tool that could help ease the load of requests and overall workload of the employees.<br></br>So, we had to find a way to speed up the process where it was possible: one shot ticket purchases (i.e. hotels and flights).</p>
    <p> We started off defining what were the needs of our users-the employees (by detailing their task flows on the existing platform and finding their pain points) and by taking a closer look at the tools used, figuring out where they could be improved and what needed to be kept to avoid a complete detachment of the new tool.</p>
    <h3>Users and audience</h3>
    <p>Primary and secondary teachers and - indirectly their pupils. It is interesting to notice how - even though the subscription was aimed at teachers - research showed us how they responded better to a branding and visual language that was in line with the need of their students (more colourful and playful), as a proxy of what they could expect from the resources themselves.</p>
    <h3>My role</h3>
    <p>I acted as the product designer for this internal tool: I talked to the stakeholders along with the CTO before starting the project, collected insights and interviews from the users, did the initial analysis along with the developer, pen + paper wireframes, clickable prototype and made  sure that development was done according to both requirements and design.</p>
    <h3>Constraints and Limitations</h3>
    <p>The biggest limitation had to be the time frame in which we could bring this new tool to life. We also had to stay focused on both giving a clean, lean UX experience while delivering all the info and flexibility the users would need.</p>
    <img src="../images/alidays-fast2.jpg"></img>
    <h6>Detail interaction of the navigation.</h6>
    <h3>The Solution</h3>
    <p>We found the answer by giving this tool a clear purpose and identity as a product.<br></br>The most relevant problem we had encountered while testing with the final users was the need of flexibility they had. 
    So, we turned this tool into a feature of the bigger scope backoffice platform, instead of a tool in itself.</p>
    <img src="../images/alidays-fast3.jpg"></img>
    <h6>DUE TO THE NATURE OF THE PROJECT, SENSITIVE DETAILS ARE WITHHELD IN ORDER TO PROTECT THE UNDERLYING INTELLECTUAL PROPERTY OF THE PRODUCT.</h6>
    </div>
  </Layout>
)



export default ProjectPage
