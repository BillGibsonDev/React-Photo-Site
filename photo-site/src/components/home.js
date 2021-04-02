import React from 'react'

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function home() {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
    return (
        <div>
            <section id="home">
            <div className="top-square-container">
                <div className="squareOne">
                 <div className="backgroundOne"></div>
                </div>
                <div className="title-container">
                  <h1>Sal Vespucci</h1>
                </div>
            </div>
              
              <div className="bottom-square-container">
                <div className="title-container">
                  <h2>Lets make your memories beautiful!</h2>
                </div>
                <div className="squareTwo">
                 <div className="backgroundTwo"></div>
                </div>
              </div>
              <div className="nav-buttons">
               <a href="#about">About</a>
               <a href="#work">Gallery</a>
               <a href="#contact">Contact</a>
              </div>
              <button id="topBtn" onClick={topFunction}><FontAwesomeIcon className="topBtn-icon" icon={faChevronUp} size="2x"/></button>
            </section>
        </div>
    )
}
