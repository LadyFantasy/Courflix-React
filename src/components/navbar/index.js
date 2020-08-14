import React from "react"
import {Link as LinkRouter} from "react-router-dom"
import logo from "../../assets/LOGO.png"
import "./index.scss"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { slide as Menu } from 'react-burger-menu'
// import HamburgerMenu from '../HamburgerMenu';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

    showSettings (event) {
        event.preventDefault();
      }
    render() {
        const {links} = this.props
        return (
            <>
                <header className="header">
                   
                   {links &&
                   <div className="menu-container">
                   <Menu slide className="menu">
                        <Link activeClass="active" className="nav-link-menu" to="hero" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Home</Link>
                        <Link activeClass="active" className="nav-link-menu" to="series" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Series</Link>
                        <Link activeClass="active" className="nav-link-menu" to="continue" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Movies</Link>
                        <Link activeClass="active" className="nav-link-menu" to="recomended" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Recomended for you</Link>
                        <Link activeClass="active" className="nav-link-menu" to="list" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>My list</Link>
                   </Menu>
                   </div>
                   }
                    <LinkRouter to="/"><img src={logo} alt="Logo Courflix" className="header-logo"/></LinkRouter>
                    
                    {links && 
                    <nav className="nav-links">
                        <Link activeClass="active" className="nav-link" to="hero" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Home</Link>
                        <Link activeClass="active" className="nav-link" to="series" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Series</Link>
                        <Link activeClass="active" className="nav-link" to="continue" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Movies</Link>
                        <Link activeClass="active" className="nav-link" to="recomended" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>Recomended for you</Link>
                        <Link activeClass="active" className="nav-link" to="list" spy={true} smooth={true} offset={10} duration={200} onSetActive={this.handleSetActive}>My list</Link>
                    </nav>}
                    
                </header>
            </>
        )
    }
}

export default Navbar