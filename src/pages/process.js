import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../style/project-page.css'



const ProjectPage = () => (
  <Layout>
        <div>
        <div className="Project-Hero"> 
          <div className="Project-HeroGroup">
            <h2>The Circle of Product Design</h2>
            <h3>[In All Its Freudian Glory]</h3>
        </div>
        </div>
        </div>
    <div className="Project-Body">
    <p>Getting from point A to point B is sometimes messy even when we are simply walking — wondering if the path is right, if we are going in the right direction, what if we took that shortcut and so on.
But when point A is a user problem and point B is an implemented feature, it’s like navigating in open sea with an old map and a faulty compass.
That is why following a rigorous process — even when time is tight — is key to getting to that point B with as much confidence and data about the solution we chose as possible; but also in order to make it a little easier the following times (and to build an exhaustive documentation for future generations to come).</p>
    <img src="../images/process1.jpg"></img>
    <h3>1. Understand the problem</h3>
    <p>First off, how did this request come to life? Was it a customer request, the CEO’s idea, a roadmap step towards the achievement of The Vision? Understanding where that issue on Jira or email or post it with the request came from is pivotal. Discerning the actual problem that triggered the request from the messenger’s added interpretation is often hard and also easy to overlook (and let’s face it, less time consuming). Travelling back to that initial spark that triggered it means making sure the starting point of the design is the actual problem, and not one of the possible solution.
Gather insights from customer care, from the CEO, from the Head of Product, whoever and - kind of like a Sigmund Freud of Product Design - dig into that until you hit the source, the original event that sparked the request.</p>
    <img src="../images/process2.jpg"></img>
    <h3>2. Research the problem and gather data</h3>
    <p>Step two means getting really good at bothering people and googling things. Once identified that event (might be a childhood trauma or a customer complaint) it’s now time to get as much information as possible on it. How are other people handling that issue? Is it a widespread problem or a niche issue? Is there a way we can split that problem into smaller problems? Most importantly, gather data on it.
Even if we are talking about a completely new feature and/or the product is still to be developed, there are metrics that relate to it (to some extent) that can be used. If it’s an improvement of an existing feature it should be easier getting use data from analytics or any kind of metrics that should have been implemented.</p>
<img src="../images/process3.jpg"></img>
<h3>3. Re-frame the problem</h3>
    <p>With all that information by now, it should be easy to get a better picture of the problem and the context is exists in. Reframing the problem means getting a different set of eyes and looking at it from another perspective (see J.W. Getzels works on the “Problem of the Problem” and creative problem solving), thus spoiling it from any previous bias or interpretation that might have been added while collecting it.
So, while the feature request might have been “we need a feature that allows to transfer money to the user when the balance is low” (which is a request that already contains the solution), the problem that originated it might have been “transferring money to the user is time consuming and requires checking constantly the balance”. This new reframing of the problem opens up new paths towards the solution (either implement the scheduler, or an automatic alert when the balance is low).</p>
<img src="../images/process4.jpg"></img>
<h3>4. Design the solution</h3>
    <p>The problem is now identified and data is available to put it into the wider context of the product. It is now time to frame the solution as in “decide which one of these paths is going to the solution which is better fit for the problem”. For this purpose it can be useful to put in the form of questions which features should the solution have - “should the user be able to set an automatic reminder?” “Should the user be able to import events?” - and build a list of possible solution approaches. The aim is to narrow down the options and form an assumption that will be tested with a prototype.
Since the aim is testing the assumption, the prototype would ideally be focused around that, and making it assumption-centered, trying to strip it from all the frills and unnecessary details that might distract the user when testing. At this step it is also ideal to chat with the developers and anyone else that will be involved in the process (QA, wider design team, customer care) to gather their insights on the solution from their perspective.</p>
<img src="../images/process5.jpg"></img>
<h3>5. Test the solution</h3>
    <p>Depending on the resources and time available, user testing is always both challenging and necessary. Even if the resources are low and time is tight, testing a sample of users that is representative of the larger user base of the product is extremely important, even more so than having a large sample which is not representative and thus, biased (see the Literary Digest case in 1936). Collecting notes - or better yet record the audio - in the most exhaustive way means it is easier if the interviews are conducted with the help of a UX researcher (if possible, or at least another human being who can write) in order to keep both the quality of the notes and the interview high.</p>
<img src="../images/process6.jpg"></img>
<h3>6. Implement the solution</h3>
    <p>So now, is the assumption validated or not? If so, what are the pain points and strengths of the design? Assuming it all went well (assumption validated and minor pain points) the prototype will have to be turned into actual screens and requirements to give the developers. In order to pave the path for future iterations, defining which are the KPIs and success indicators of the feature is a mandatory task that might require help from other team members (marketing people, BE and FE devs). In case the assumption was not tested it would be necessary to go back to the previous step of designing the solution or even reviewing the problem itself, and start again.
When designing a complex solution - to, most likely, a complex problem - I personally always try begin with implementing the simplest version of the solution, and to add complexity over time and releases.</p>
<img src="../images/process7.jpg"></img>
<h3>7. Ship the feature</h3>
    <p>Well, this is self explanatory. Just get it out there and let the world know it is out there.</p>
<img src="../images/process8.jpg"></img>
<h3>8. Follow the feature’s success</h3>
    <p>If everything was rightly done metrics should be available for gathering. Checking in with customer care and give them the heads up about what is going on and setting a preferential channel for customer feedbacks regarding all aspects of the new feature is also a good idea to monitor the pulse of the situation.</p>
<img src="../images/process9.jpg"></img>
<h3>9. Did the solution solve the problem?</h3>
    <p>The feature has been shipped and available to the public for a few months now, and depending on the roadmap and other issues it should be time to ask the question: did the larger user base actually found the problem solved by the implemented solution?
In the perfect world, there are large parties and gathering being held to celebrate the simple brilliant beauty of the solution and world famine is now a memory just because of this feature’s problem solving abilities.
In reality, not everyone is pleased (users and/or teammates), other issues have arisen and it might be time to solve niche problems or - regardless the entire process - we might have missed the mark. So, let’s keep faith in the process and start all over again (with more insight).</p>
<img src="../images/process10.jpg"></img>
<h6>All illustrations by me, here the article on <a href="https://medium.com/@francine.negro/the-circle-of-product-design-6c78ade2010e">Medium </a></h6>
    </div>
  </Layout>
)



export default ProjectPage
