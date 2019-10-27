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
      <h2>THE OUT</h2>
            <h3>Rethinking Car Rental<br></br> 
            <br></br><a href="https://www.theout.com/" target="_blank">THE OUT</a> is a on demand car rental company, supported by Jaguar Land Rover. Open the iOS app (download <a href="https://apps.apple.com/gb/app/the-out/id1355354261" target="_blank">here</a>, UK market only) and in 5 steps you can get your vehicle of choice  delivered to your door. No drama at the counter, no surprises, no hidden figures.</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
      <h3>The Problem</h3>
    <p>THE OUT started out (see what I did there?) as Liquid, back in 2017 as a proof of concept  iOS app, whose goal was disrupting the way we think about renting a car. After a little over a year, it was apparent that its UVP - delivery and collection of the vehicle, one simple premium car and no hidden extras or high excess fees - it was time to refresh and relaunch with a punchier brand.</p>
    <p>A few months after rebranding the app, more and more customers asked for more choice on top of our faithful Discovery Sport.  Business and marketing were ecstatic about the idea to finally incorporate the pièce de resistance the Range Rover Sport into our fleet, but the question for our product team was: how do we incorporate the choice in a flow that is only  built around one car?</p>
    <h3>Users and audience</h3>
    <p>All the users of THE OUT would be impacted, as the booking flow itself was to be rethought and changed.<br></br>The user base of the iOS app is mostly males, between 30-50 living in London (primarily in SW) and working in finance.</p>
    <h3>My role</h3>
    <p>Designing the UI, the UX, prototyping the various iterations to test with the users, present the solutions to the stakeholders, follow implementation with the Devs, creative direction of imagery following JLR’s guidelines.</p>
    <img src="../images/theout_home.png"></img>
    <h6>The homescreen and profile page, which underwent a makeover to reflect the fleet update.</h6>
    <h3>Constraints and Limitations</h3>
    <p>The plan was simple enough: allow users to select among an array of models before peak season. So, first limitation was time: we had just a little over 2 months to design and develop all that was needed before the bookings would start coming in over summer.
    <img src="../images/theout_old.png"></img>
    <h6>The existing flow to book the Discovery Sport, the only car model available.</h6>
      <br></br>As if this was not enough, we had to work with a limited development team, and thus we had to make (sometimes hard) choices over what was going to be developed and changed in the booking flow. Another additional - small but significant - limitation was the imagery available to us and the strict guidelines imposed by JLR.</p>
    <h3>The Solution</h3>
    <p>I started off designing an improved version of our existing flow, leaving the address selection as the last step. The reason behind this was that - the price being fixed - we just needed the days to calculate the pricing per model. An element I wanted to include was the imagery: we had evidence from testing (agency AB tests ran with an agency) that imagery worked in catching the attention of the user and engaging them with the content. For this reason, the CTA to select the car is found in the detail screen of the car.</p> 
    <p>Another element to take into consideration was that the updated list of vehicles available needed to be seen as soon as possible in the app, in order to build trust (we were a fairly unkown brand) and hook the users with out premium offering.</p>
    <img src="../images/theout_1st.png"></img>
    <h6>The first iterartion. From top left, the flow from after tapping on "get quote" on the home screen, to entering the locations.</h6>
    <p>This first version (see cars > enter dates > enter location on map) tested positive with the users, as it took just a couple of taps to get a quote. But sometimes life doesn’t happen the way you envision or expect and - due to additional resources limitations - I had to let this go and iterate on a more cost effective solution.
    The final solution kept some of the focal elements - the car list as the first screen, the interaction area on top of it, the card layout - but had to let go of the improved flow.
    Another additional feature of the final solution was the ability to “request” cars: it was my solution to the problem “how do we know demand  of a certain model before purchasing them?”. It simply opens a pre filled chat with the dates and location entered by the user, so that it can be manually filled out.
    </p>
    <img src="../images/theout_2nd.png"></img>
    <h6>The final version, with the key screens different from the 1st iteration. Second from last is the "on request" screen.</h6>
    <h3>The Impact</h3>
    <p>The impact was definitely huge. We started off with a very simple proposition - choose our only model, no fuss - and gave to the users what they really wanted, more choice.It has made the product more complicated but it has definitely allowed THE OUT to start playing with the “big boys” of rental.<br></br>We had to revisit backend, frontend and operations along with the app.<br></br>Multiple landing pages were created (by me, but more on that soon) to accommodate marketing and ads. The effort -30 day after release - granted us +40.8% bookings, +34% new customers.
</p>
</div>
  </Layout>
)



export default ProjectPage
