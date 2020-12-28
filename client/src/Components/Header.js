import React, { Component } from 'react';
import TypeWriter from './TypeWriter/TypeWriter'
import night from '../media/night.webm'


class Header extends Component {
  render() {

    let msgs = ["I'm a full-stack web developer and a recent Computer Science graduate from Cal Poly San Luis Obispo.",
    "My favourite technology stack is React, AWS and SQL."];

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <video className='videoTag' autoPlay loop muted>
         <source src={night} type='video/webm' />
      </video>

      <TypeWriter messages={msgs} />

      <p className="scrolldown">
         <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
