import React from 'react'
import { Link } from 'gatsby'
import Card from '../components/card'
import Layout from '../components/layout'
import staticdata from "../../staticdata.json"
import '../style/index.css'

const IndexPage = () => (
  <Layout>
        <div>
    <div className="Hero"> 
          <div className="HeroGroup">
        <h1>Hey, I'm Francesca</h1>
        <p>I am a Product Designer || Problem Solver || On occasion illustrator based in London.
        <br></br>I help digital products move from problems to solutions.<br></br></p>
        </div>
        <div className="HeroGroup">
        <img src="/images/ghost.gif" width="150px"></img>
        </div>
    </div>  
<div className="Banner"></div>
<div className="CardSection">
<h2>Case studies</h2>
<p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the about page.</p>
<div className="CardGroup">
      {staticdata.cards.map(card => ( 
        <Card {...card } />
      ))}
</div>
<div className="">
  <div className="SecondarySection">
  <h2>Other projects I worked on in this lifetime</h2>
    <div className="listItem">
    <div className="listItem">
    <Link to="soldo-mobile">Soldo App</Link>
    <h4>Soldo's app, specifically designed for admins to keep an eye on the employee's spending.</h4>
    <h6>Fintech, 2018</h6>    
    </div>
    <Link to="alidays-app">Alidays App</Link>
    <h4>The company's first app, dedicated to the customers that had booked a trip and also who wanted to discover what to do during their trip.</h4>
    <h6>Travel, 2016</h6>
    </div>
    <div className="listItem">
    <Link to="alidays-fast">Alidays Fast Booking</Link>
    <h4>A new approach to booking hotels and flights to satisfy the need of internal users.</h4>
    <h6>Travel, 2016</h6>    
    </div>
  </div>
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
        <img src="/images/lightbulb1.png" width="150px"></img>
        </div>
    </div>
  </div>
  
   <div className="LastSectionGroup">
        <div>
        <h2>About me</h2>
        <p>So, if you scrolled this far you might be interested to click on <br></br>this magic link here to the <Link to="about">about page</Link> where some light will be shed on<br></br> the mystery author.<br></br>Other than working in product I am the Chief Illustration Officer at <a href="https://www.jamlondon.io/" target="_blank">JAM London</a><br></br>Yes, it's a real title.</p>
        </div>
        <div className="SidePortrait">
        </div>
        </div>
        <div className="BannerLast"></div>
      </div>

      
  </Layout>

)

export default IndexPage

