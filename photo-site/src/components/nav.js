import React from 'react'

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCameraRetro } from "@fortawesome/free-solid-svg-icons";


export default function nav() {

/* Open menu */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    //document.getElementById("menuBtn").style.display = "none";
  }
  
  /* Close menu */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    //document.getElementById("menuBtn").style.display = "block";
  } 
    return (
        <div>
            <header id="nav">
             <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FontAwesomeIcon icon={faTimes} /></a>
                <div className="overlay-content" onClick={closeNav}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#work">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>
             </div>
             <div className="nav-menu">
               <div className="logo">
                <FontAwesomeIcon  id="cameraIcon" icon={faCameraRetro} size="3x"/>
                <h2>VS</h2>
               </div>
                <nav>
                <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#services">Services</a>
                  <a href="#work">Gallery</a>
                  <a href="#contact">Contact</a>
                </nav>
                <button id="menu-btn" onClick={openNav}>Menu</button>
             </div>
            </header>
        </div>
    )
}
