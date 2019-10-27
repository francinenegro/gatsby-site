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
      <h2>Tes Elements</h2>
            <h3>Making taxonomy navigation children friendly.<br></br> 
            <br></br><a href="https://www.tes.com/en-us/">Tes</a> is a leading  teacher-focused EdTech company, whose products range from various job boards, a teaching resources marketplace, news sections and online and offline courses. <a href="https://www.tes.com/store/elements">Tes Elements</a> - which sits in the resources marketplace - is a subscription-only set of primary and secondary teaching resources.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
      <h3>The Problem</h3>
    <p>Due to be relaunched, Tes Elements platform needed
      to be improved as it suffered from an array of issues:
      discoverability within the Tes universe, the product offering not being clear enough and not being visually on target with the audience.<br></br>
      The desired outcome was a product whose UVP was clear from the start, and could be easily found by those who searched for primary or secondary resources - while improving discovery and navigation within the product. With this in</p>
    <h3>Users and audience</h3>
    <p>Primary and secondary teachers and - indirectly their pupils. It is interesting to notice how - even though the subscription was aimed at teachers - research showed us how they responded better to a branding and visual language that was in line with the need of their students (more colourful and playful), as a proxy of what they could expect from the resources themselves.</p>
    <h3>My role</h3>
    <p>Redesigning the entire experience of the product, the UI, the UX, the
      branding and illustrations, prototyping the various iterations to test with
      the users.</p>
    <img src="../images/TES_old.png"></img>
    <h6>The previous implementation, with the 3 columns layout and the navigation at the top. The navigation was just one layer deep, while the taxonomy itself would span over 3 layers of depth.</h6>
    <h3>Constraints and Limitations</h3>
    <p>Most of the limitations had to do with the constraints brought by the
      three columns layout to which we had to adhere in the redesign. Another  requirement was that the taxonomy of the offering had to be always visible
      to the user.<br></br>An additional challenge was that the existing branding of the
      product was unsatisfactory (there were a number of different sub branding components within Elements itself) and needed to be refreshed.</p>
      <img src="../images/TES_nav.png"></img>
    <h6>An overview of the new version's navigation, with the 3 layers representing the taxonomy and the right hand column used as a filter to find a specific type of resource.</h6>
    <img src="../images/elements_navigation.gif"></img>
    <h6>An overview of the new version's navigation, with the 3 layers representing the taxonomy and the right hand column used as a filter to find a specific type of resource.</h6>
    <h3>The Solution</h3>
    <p>The solution was focusing on the ease of navigation and strength of
        the visual identity.<br></br>A complaint that users made during testing of the
        old version was that it was hard for them to understand that they were
        browsing Tes Elements and the browsing experience had many friction
        points (one being the unclear and arbitrary taxonomy, detached from the rest of the resources marketplace).<br></br>So, following a redesign of the taxonomy based on the national curriculum, the idea
        was allowing the users to easily follow their path while browsing and
        doing so by having clear clickable UI elements to support the ease of
        use.<br></br>The first step in getting the navigation right after a first approach, was testing it with the help of the UX researcher with a group of teachers, where we found out that the pattern chosen to select among the third layer of categories was not  clear.<br></br>The second iteration - which flipped the pattern around, turning the “everything selected” status into a default - fixed the issue getting a positive feedback around the UI element (“it looks like a button, so I know I can click on it!”).
        A stronger “more primary” feel was also a major point of interest
        during testing, where teachers felt that the product they were browsing
        was suited to their needs and approached the whole experience with a
        different expectation.</p>
        <img src="../images/TES_home.png"></img>
    <h6>First section of the homepage, where it was pivotal to communicate pricing and offer very clearly.</h6>
    <h3>The Impact</h3>
    <p>Being a true product within a product, the impact should be both
measured on itself and on the wider product (Tes Resources marketplace).<br></br>The impact of this new version of Tes Elements on the wider product it is a part of (Resources marketplace) is to make the universe of teaching resources more accessible and also to secure a section of the audience that had been feeling left out (a common complaint is that Tes Resources are too focused on secondary students).<br></br>This latter also being achieved with a stronger product identity and branding, for which I took particular engagement in.<br></br>Moreover, in terms of reducing friction for the users looking for relevant content (this was a Q4 OKR), the new navigation served to lay the ground for a similar navigation in the resources product.
</p>
<img src="../images/TES_mob.png"></img>
    <h6>Another issue to solve was the mobile navigation. Above, the screens to select one topic and then a sub topic.</h6>
    </div>
  </Layout>
)



export default ProjectPage
