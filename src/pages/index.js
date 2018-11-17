import React from 'react'
import { Link } from 'gatsby'
import Card from '../components/card'
import Layout from '../components/layout'
import staticdata from "../../staticdata.json"
import './index.css'

const IndexPage = () => (
  <Layout>
    <div>
        <div className="Hero"> 
          <div className="HeroGroup">
        <h1>Hi, I'm Francesca</h1>
        <p>I am a Product Designer || Problem solver based in London. I help digital products move from problems to solutions.</p>
        <Link to="/project-page/">Project</Link>
        </div>
        </div>
<div className="CardGroup">
      {staticdata.cards.map(card => ( 
        <Card
        title={card.title}
        text={card.text}
        image={card.image}
        />
      ))}
        </div>
      </div>
  </Layout>
)

export default IndexPage

