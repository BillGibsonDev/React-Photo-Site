
// router
import { Link } from 'react-router-dom';

// styled components
import styled from 'styled-components';

// hamburger icon
import Hamburger from '../images/hamburger.png';


const Nav = () => {

  // hides / shows nav bar on scroll down / up
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }


  function toggleNav() {
    var x = document.getElementById("mobileNav");
    if (x.style.width === "100%") {
      x.style.width = "0%";
    } else {
      x.style.width = "100%";
    }
  }
  


    return (
     <StyledNav id="nav">
      <div className="navMenu">
        <h2>Vespucci Photograpghy</h2>
        <nav>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="/#services">Services</a>
          <Link to="/GalleryPage">Gallery</Link>
          <a href="#contact">Contact</a>
        </nav>
        <div id="mobileNav" className="overlay">
          <button id="closeNavButton" onClick={toggleNav}>&times;</button>
          <div className="overlay-content" onClick={toggleNav}>
            <Link to="/" >Home</Link>
            <a href="#about" >About</a>
            <a href="/#services" >Services</a>
            <Link to="/GalleryPage" >Gallery</Link>
            <a href="#contact" >Contact</a>
          </div>
        </div>
        <button id="openNavButton" onClick={toggleNav}><img src={Hamburger} alt="menu" id="hamburgerIcon"/></button>
       </div>
      </StyledNav>
        
    )
}
const StyledNav = styled.div`
min-height: 12vh;
background: #141414;
display: flex;
width: 70%;
justify-content: space-between;
align-items: center;
border-radius: 20px;
margin-top: 1%;
position: fixed;
top: 0;
transition: top 0.3s;
z-index: 99;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
flex-wrap: wrap;
@media (max-width: 1450px){
        width: 90%;
        flex-wrap: wrap;
  } 
.navMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1450px){
        flex-wrap: wrap;
        justify-content: center;
  }
  @media (max-width: 920px) {
    justify-content: space-between;
    align-items: center;
  }
}
h2 {
  font-size: 3em;
  margin-left: 6px;
  color: #84577C;
  font-style: italic;
  font-family: Lobster Two, cursive;
  text-shadow: 2px 2px black;
  @media (max-width: 1250px){
        margin-bottom: 1em;
  }
  @media (max-width: 920px) {
    margin-bottom: 0;
  }
}
nav {
display: flex;
justify-content: space-around;
width: 50%;
@media (max-width: 1450){
        width: 100%
  }
  @media (max-width: 920px){
    display: none;
  }
}
a {
  font-size: 1.5em;
  color: white;
  margin: 0 10px;
  letter-spacing: 1px;
  transition: 0.3s;
  @media (max-width: 1450px){
        margin-bottom: 10px;
  }
  &:hover, &:focus{
    color: #84577C;
    text-shadow: 1px 1px black;
  }
}
//
/* Slide out menu */
//
.overlay {  
  height: 100%;
  width: 0;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.9); 
  overflow-x: hidden; 
  transition: 0.5s;
}


.overlay-content {
  position: relative;
  top: 25%; 
  width: 100%; 
  text-align: center; 
  margin-top: 30px; 
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; 
  transition: 0.3s; 
}


.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

#openNavButton, #closeNavButton {
  background: none;
  border: none;
  cursor: pointer;
}
#closeNavButton {
  font-size: 10rem;
  color: #84577C;
  position: absolute;
  top: 20px;
  right: 45px;
  &:hover, &:focus {
    font-size: 12rem;
    color: white;
  }
}
#openNavButton {
  display: none;
  margin-right: 1em;
  @media (max-width: 920px){
    display: flex;
}
}
#openNavButton img{
  width: 30px;
}
`;

export default Nav;