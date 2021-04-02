import React from 'react'

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function nav() {
/* Open menu */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close menu */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 
    return (
        <div>
            <header id="nav">
             <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FontAwesomeIcon icon={faTimes} /></a>
                <div className="overlay-content" onClick={closeNav}>
                    <a href="#about">About</a>
                    <a href="#work">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>
             </div>
             <div className="nav-menu">
                <h2>VS</h2>
                <nav>
                  <a href="#about">About</a>
                  <a href="#work">Gallery</a>
                  <a href="#contact">Contact</a>
                </nav>
                <button id="menu-btn" onClick={openNav}>Menu</button>
             </div>
            </header>
        </div>
    )
}
