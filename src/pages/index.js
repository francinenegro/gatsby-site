import React from 'react'
import { Link } from 'gatsby'
import Card from '../components/card'
import Layout from '../components/layout'
import staticdata from "../../staticdata.json"
import '../style/index.css'

const IndexPage = () => (
  <Layout>
        <div>
          <div className="BannerSlim"></div>
        <div className="Hero"> 
          <div className="HeroGroup">
        <h1>Lorem ipsum</h1>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the about page.</p>
        </div>
        <div className="HeroGroup">
        <img src="/images/ghost.gif" width="150px"></img>
        </div>
        </div>  
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
    <h2>Other projects</h2>
      <p>A little more about me to fill the void and some more words and a link to the about page.</p>
  <div className="SecondarySection">
    <div className="listItem">
    <a href="alidays-style">Alidays App</a>
    <h4>A little copy here about what it was, what I did for the project and such</h4>
    <h6>Milan, 2019</h6>
    </div>
    <div className="listItem">
    <a href="alidays-style">Soldo App</a>
    <h4>A little copy here about what it was</h4>
    <h6>Milan, 2019</h6>    
    </div>
    <div className="listItem">
    <a href="alidays-style">Alidays Web booking</a>
    <h4>A little copy here about what it was</h4>
    <h6>Milan, 2019</h6>    
    </div>
  </div>
</div>
</div>
  <div className="BannerSlim"></div>
<div> 
   <div className="SectionGroup">
        <div>
        <h2>Process</h2>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the <a href="https://medium.com/@francine.negro/the-circle-of-product-design-6c78ade2010e">process page</a></p></div>
        <div className="">
        <img src="/images/ghost.gif" width="150px"></img>
        </div>
    </div>
  </div>
        <div> 
   <div className="LastSectionGroup">
        <div>
        <h2>About me</h2>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from <a href="about">about</a> problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the <a href="about">about</a> page.</p></div>
        <div className="">
        <img src="/images/portrait.JPEG" width="150px"></img>
        </div>
        </div>
        </div>
        
      </div>

      
  </Layout>

)

export default IndexPage

