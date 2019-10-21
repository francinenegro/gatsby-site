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
</div>
<div> 
   <div className="SectionGroup">
        <h2>Process</h2>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the about page.</p>
        </div>
        </div>
        <div> 
   <div className="LastSectionGroup">
        <h2>About me</h2>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.<br></br> A little more about me to fill the void and some more words and a link to the about page.</p>
        </div>
        </div>
        
      </div>

      
  </Layout>

)

export default IndexPage

