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
            <h2>Onboarding</h2>
      <h3>Making the account application process less overwhelming.<br></br><br></br><a href="https://www.soldo.com/en-uk/b/business/" target="_blank">Soldo Business</a> is a payment platform that allows companies to control more efficiently their employees' spending both on the web and on the go, with the mobile app.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <h3>The Problem</h3> 
    <p>Soldo being a financial platform, users - companies, in this case - need to register as they would for any other financial service.  The registration process at the time there was composed by 11 different steps  (on a Typeform form) which varied from “what is the size of the company” to entering the full address of the director of the company.
<p>The issue of drop outs and users finishing up the registration and never</p>
becoming active was a reality and it became clear that we needed to rethink the way we onboarded people. Another  related issue that arose was the need for new users to have more clarity around what they could do or needed to do on their first access to the Soldo console. This left the users the only choice to ask CS, thus flooding Intercom with requests.</p>
    <h3>Users and audience</h3>
    <p>All new customers would be impacted by the redesign of the onboarding process. At the time (2017) of designing  the feature, the most part of companies that registered with Soldo were small to medium size companies.</p>
    <h3>My Role</h3>
    <p>Analyzing and gathering the registration requirements, design a
    new flow inclusive and new views, write user stories, find with the other designer on the team the perfect solution, presenting and discussing with stakeholders.</p>
    <h3>The Limitations</h3> 
    <p>Flow-wise, the limitations included mainly the legal restrictions and
information that the registering users needed to provide in order to
complete the process.<br></br>Following regulations and making sure we were compliant was a big part of the task, which saw me getting feedback and approval from the Risk Manager on a daily basis while working on the project.<br></br>A further challenge was designing for both the IT
and UK flows, each with their different set of required information due to the different national regulations.</p>
    <h3>The Solution</h3>
    <p>The solution was finding which were the friction points (by
analyzing the data from the registered users vs the active users
and complaints received from the CS) and try sorting them out by
providing the user with better feedback on their current stage in
the process and emails that punctuated the process.</p>
<p>Improvements
were also made to automate the task of entering the huge
amount of information needed: introducing search postcode instead of manually entering is, GoogleMaps
autocomplete, turning open-ended questions into multiple options.</p>
<img src="../images/Soldo_onboarding.png"></img>
    <h6>A sample of the screens of the final onboarding screens.</h6>
    <h3>The Impact</h3>
    <p>The changes allowed not only to convert and onboard more users,
but also to set the table for the scaling process that was beginning.
This mainly because the changes made brought improvements
to the experience of the other actor of this process - the internal
operator - and opened the way to further improvements down this
road. The completion registration rate went up by 2.3%.</p> 
<p>This furthermore opened the way to a new feature within the Soldo Console - for which I am proud to say I personally pushed - the walkthrough. Now users are accompanied by call outs to the UI elements when they need help or when a new feature is available.</p>
    <img src="../images/Soldo_onboarding 2.png"></img>
    <h6>Some screens of the walkthrough call outs during the first deposit.</h6>
    </div>
  </Layout>
)



export default ProjectPage
