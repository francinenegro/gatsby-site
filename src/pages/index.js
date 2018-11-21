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
        <h1>Hi, I'm Francesca</h1>
        <p>I am a Product Designer || Problem solver based in London.
        <br></br>I help digital products move from problems to solutions.</p>
        </div>
        </div>
<div className="CardGroup">
      {staticdata.cards.map(card => ( 
        <Card {...card } />
      ))}
</div>
      </div>
  </Layout>
)

export default IndexPage

