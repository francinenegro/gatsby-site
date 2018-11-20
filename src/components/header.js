import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {

    state = {
        hasScrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrollTop = window.pageYOffset
        
        if (scrollTop > 50) {
            this.setState({ hasScrolled:true})
        }
        
        else {
            this.setState({ hasScrolled:false})
        }
    }

    render () {
        return (
            /* the line below is to verify the state,the first thing after the ? is the "if true" the other is the "else" */
            <div className={ this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }> 
            <div className="HeaderGroup">
                  <Link to="/" > <img src="/images/myLogoCat.gif" width="30"/></Link>
                  <Link to="/">Work</Link>
                  <Link to="/process" activeStyle={{
            color: "rgb(234, 61, 61)",
          }}>Process</Link>
                  <Link to="/about" activeStyle={{
            color: "rgb(234, 61, 61)",
          }}>About</Link>
                  </div>
         </div>
        )
    }
}


export default Header