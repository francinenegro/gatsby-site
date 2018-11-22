import React from 'react'
import Link from 'gatsby-link'
import '../style/footer.css'

class Footer extends React.Component {


    render () {
        return (
            <div className="Footer"> 
                <div className="FooterGroup">
                    <a href="https://medium.com/@francine.negro" target="blank"> <img src="/images/icons/behance.svg"></img> </a>
                    <a href="https://dribbble.com/francinenegro" target="blank"> <img src="/images/icons/dribbble.svg"></img> </a>
                    <a href="https://www.linkedin.com/in/francesca-negro" target="blank">  <img src="/images/icons/linkedin.svg"></img></a>
                    <a href="https://twitter.com/frncn_n" target="blank">  <img src="/images/icons/Twitter.svg"></img> </a>
                    <a href="https://medium.com/@francine.negro" target="blank">  <img src="/images/icons/Medium.svg"></img></a>
                </div>
                <div> 
                    <h6>ALL CONTENT IS NOT AVAILABLE FOR PERSONAL USE OR DOWNLOAD, UNLESS OTHERWISE STATED.<br></br>PORTFOLIO BY ME, CODED USING GATSBY AND REACT<br></br>Copyright Francesca Negro 2018.</h6></div>
                </div>
        )
    }
}


export default Footer