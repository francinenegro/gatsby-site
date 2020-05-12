import React from 'react'
import { Link } from 'gatsby'
import Card from '../components/card'
import Layout from '../components/layout'
import staticdata from "../../staticdata.json"
import '../style/index.css'

const IndexPage = () => (
  <Layout>
        <div>
          {/* <div className="BannerSlim"></div> */}
    <div className="Hero"> 
          <div className="HeroGroup">
        <h1>Hey, I'm Francesca</h1>
        <p>I am a Product Designer,<br>
        </br>occasional illustrator based in London.
        <br></br>I help digital products move from problems to solutions.<br></br></p>
        </div>
        <div className="HeroGroup">
        <img src="/images/ghost.gif" width="150px"></img>
        </div>
    </div>  
<div className="Banner"></div>
<div className="CardSection">
<h2>Case studies</h2>
<p>I help digital products move from problems to solutions.<br></br>
Below are a few of the most recent projects that I worked on, with more detailed use cases.<br></br>A selection of others can be found further below.</p>
</div>        
<div className="CardGroup">
      {staticdata.cards.map(card => ( 
        <Card {...card } />
      ))}
</div>
<div className="LastSectionGroup">
        <div>
        <h2>Playground</h2>
        <p>Sometimes all work and no play make people go insane.<br></br>A collection of ramdom and not so random design stuff is <a href="https://dribbble.com/playbook/" target="_blank">in my playbook</a>.<br></br> Or for ramblings and such <a href="https://medium.com/@francine.negro">my Medium page</a>.</p>
        </div>
        <div className="SideProject">
        </div>
        </div>
  <div className="SecondarySection">
  <h2>Other projects</h2>
    <div className="listItem">
    <div className="listItem">
    <a href="soldo-app">Soldo app</a>
    <p>Soldo's app, specifically designed for admins to keep an eye on the employee's spending.</p>
    <h6>Fintech, 2018</h6>    
    </div>
    <a href="alidays-app">Alidays App</a>
    <p>The company's first app, dedicated to the customers that had booked a trip.</p>
    <h6>Travel, 2016</h6>
    </div>
    <div className="listItem">
    <a href="alidays-fast">Alidays Fast booking</a>
    <p>A new approach to booking hotels and flights to satisfy the need of internal users.</p>
    <h6>Travel, 2016</h6>    
    </div>
  </div>
  <div className="Banner"></div>
<div> 
   <div className="SectionGroup">
        <div>
        <h2>Process</h2>
        <p>When the stars align, The Process shows itself in its overwhelming splendor.
        <br></br>To commemorate that moment, I wrote an article about it - <a href="https://medium.com/@francine.negro/the-circle-of-product-design-6c78ade2010e" target="_blank">The Process</a> - <br></br> and how I like to use it to make better decisions in product stuff.<br></br>I promise it's worth the 7 minute read.</p></div>
        <div className="">
        <img src="/images/process1.jpg"></img>
        </div>
    </div>
  </div>
  
   <div className="LastSectionGroup">
        <div>
        <h2>About me</h2>
        <p>So, if you scrolled this far you might be interested to click on <br></br>this magic link here to the <a href="about">about page</a> where some light will be shed on<br></br> the mystery author.<br></br>Other than working in product I am the Chief Illustration Officer at <a href="https://www.jamlondon.io/" target="_blank">JAM London</a><br></br>Yes, it's a real title.</p>
        </div>
        <div className="SidePortrait">
        </div>
        </div>
        <div className="BannerLast"></div>
      </div>

      
  </Layout>

)

export default IndexPage

