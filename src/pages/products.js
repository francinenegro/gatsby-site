import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Products</h2>
            <h3>Actual factual objects available for purchase. Iphone cases, mugs, rugs, tshirts, framed and canvas prints, laptop cases, pillows etc.
Purchase following the link:
http://society6.com/francinefourteen</h3>
        </div>
        </div>
        </div>
  <div className="Project-Body_small_image">
    <img src="../images/products.jpg"></img>
  </div>
  </Layout>
)

export default ProjectPage
  