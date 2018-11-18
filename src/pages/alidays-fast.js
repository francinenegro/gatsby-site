import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Fast Booking - Case Study</h2>
            <h3>This is an internal tool case study for a platform developed internally to speed up and aid the employees of the company in their daily tasks.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <p>The company needed  an internal tool that could help ease the load of requests and overall workload of the employees. So, we had to find a way to speed up the process where it was possible: one shot ticket purchases (i.e. hotels and flights).
We started off defining what were the needs of our users-the employees (by detailing their task flows on the existing platform and finding their pain points) and by taking a closer look at the tools used, figuring out where they could be improved and what needed to be kept to avoid a complete detachment of the new tool.</p>
    <img src="../images/alidays-fast1.jpg"></img>
    <h3>THE LIMITATIONS</h3>
    <p>The biggest limitation had to be the time frame in which we could bring this new tool to life. We also had to stay focused on both giving a clean, lean UX experience while delivering all the info and flexibility the users would need.</p>
    <img src="../images/alidays-fast2.jpg"></img>
    <h3>THE SOLUTION</h3>
    <p>We found the answer by giving this tool a clear purpose and identity as a product. The most relevant problem we had encountered while testing with the final users was the need of flexibility they had. 
So, we turned this tool into a feature of the bigger scope backoffice platform, instead of a tool in itself.</p>
    <img src="../images/alidays-fast3.jpg"></img>
    <h3>MY ROLE</h3>
    <p>I acted as the product designer for this internal tool: I talked to the stakeholders along with the CTO before starting the project, collected insights and interviews from the users, did the initial analysis along with the developer, pen + paper wireframes, clickable prototype and made  sure that development was done according to both requirements and design.</p>
    <h6>DUE TO THE NATURE OF THE PROJECT, SENSITIVE DETAILS ARE WITHHELD IN ORDER TO PROTECT THE UNDERLYING INTELLECTUAL PROPERTY OF THE PRODUCT.</h6>
    </div>
  </Layout>
)



export default ProjectPage
