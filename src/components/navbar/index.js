import React from "react"
import {Link as LinkRouter} from "react-router-dom"
import logo from "../../assets/LOGO.png"
import "./index.scss"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component {
    render() {
        const {links} = this.props
        return (
            <>
                <header className="header">
                   
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