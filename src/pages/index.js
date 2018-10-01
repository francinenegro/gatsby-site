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
        <h1>React workshop</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Go to page 2</Link>
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

