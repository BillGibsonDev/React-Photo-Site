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
             <h1>Hello!<br /> I am Sal!</h1>
             <h2>Lets make your memories beautiful!</h2>
             <button id="topBtn" onClick={topFunction}><FontAwesomeIcon className="topBtn-icon" icon={faChevronUp} size="2x"/></button>
            </section>
        </div>
    )
}
