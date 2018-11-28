import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>Wallet manager</h2>
            <h3>Designed for Soldo Business.<br></br> Soldo is a payment platform that allows companies to control more efficiently their employees' spending.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <p>The starting point an existing implemented feature which allows users to automatically transfer money from the company to the the user wallets.
    There were some additional features to be developed and we had received some negative feedback about the implemented version.</p>
    <p>In this context, I started thinking about a possible re design of the existing feature that incorporated also a re organization of other  existing features  and new ones. I began scouring for more information (going through Intercom chats and chatting with our UX researcher) and found out why the users were not satisfied with what was available.</p>
    <img src="../images/soldo-webapp1.gif"></img>
    <h6>The previous implementation</h6>
    <p>To prove that I then started researching the problem to really understand what was the problem we were trying to find: admins needed to automate the process of topping up the user’s wallets in order not to leave it empty.</p><p>I started pulling some data on the current situation of the feature and the wider context of transferring money to understand how the users were using the existing feature: the situation showed low engagement (under 9%) and an unclear pattern of use. The assumption was formulated and ready to test with the prototype.</p>
    <img src="../images/soldo-webapp2.gif"></img>
    <h6>Screen capture of the  prototype during testing</h6>
    <p>For testing, we recruited some users (with the help of the UX researcher) for half hour Skype interviews to test both the current version and the prototype. I made sure to get a sample that - even though small (recruiting companies is as hard as it gets) - was still representative of the greater user base.<br></br>I used and gathered the segmentation data our analyst had recently made and used this to position rank these companies on various significant variables.
    The results confirmed the assumption and made emerge a range issues while they also gave us an idea which way to proceed in terms of implementation: start simple and add complexity.</p>
    <img src="../images/soldo-webapp3.png"></img>
    <h6>An overview of the new version</h6>
    <p>The interface was then presented to the stakeholders and refined to integrate inputs from the stakeholders. The design tested was then modified to incorporate the re organization of another existing feature and a new one (which had been in roadmap for awhile).</p>
    <p>KPIs were also defined in order to monitor the feature’s success starting at the month mark after the implementation (uses of the feature vs. traditional transfers, overall use and companies that use the feature), another point I made sure to add was improving communication of the feature when released.</p>
    <img src="../images/soldo-webapp4.png"></img>
    <h6>Complete flow of the new version</h6>
    </div>
  </Layout>
)



export default ProjectPage
