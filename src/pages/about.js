import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'

const AboutPage = () => (
  <Layout>
          <div className="About_container"> 
          <img src="/images/portrait.JPEG"></img>
          <div className="About_text">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      </link>
    <a href="/"><i class="material-icons md-48" >arrow_back</i></a>
          <h2>About me</h2>
          <h3>Francesca N.</h3>
            <p>Problem solver, no matter the problem/<br></br><br></br>
I have extensive experience in understanding and translating what people express, so that it becomes a clear directed instruction we can then work on/<br></br><br></br>
I strive to make things easier for the user, and believe that user testing and feedbacks are both a cure and a curse/<br></br><br></br>
I have a degree in Psychology then pivoted towards design/<br></br><br></br>
I love video games and learning how to actually make them/<br></br><br></br>
I am a nerd who will spend countless hours learning new skills and will look up everything I don't know in the process/<br></br><br></br>
I am a Lead Gift Evangelist, which means you will never have to pick a gift for someone ever again/<br></br><br></br> 
I draw cute things I sometimes put into my designs/​​​​​​​<br></br><br></br>
I illustrate (stickers anyone?) and write for <a href="https://www.jamlondon.io/" target="_blank">JAM London</a> to make the product design conference a reality/</p>
</div>
        </div>
  </Layout>
)

export default AboutPage
