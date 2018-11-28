import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Alidays App Styleguide</h2>
            <h3>Designed for Alidays, a travel company always striving to improve their experience through technology.</h3>
            <h3>All the (very detailed but necessary) documentation to turn the various wireframes and designs into the actual app, pixel by pixel.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <p>Samples of all the assets I drew up and delivered to the developer in order to help him in his work.<br></br>
    Below there are a few pages off the style guide with typography and swatches samples, a thorough flow (much needed in a case like this with many different features to keep things straight during development) and pages off the detailed guide for every view in the app (pixels, colors, spaces and so forth).</p>
    <p>It took time to develop and put together but became the reference guide for the developer and a primary tool of documentation for the app.</p>
<div className="Project-Body">
    <img src="../images/App -guidelines.png"></img>
  </div>
    </div>
  </Layout>
)

export default ProjectPage
