// router
import { Link } from 'react-router-dom';

// styled components
import styled from 'styled-components';

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

    return (
            <StyledNav id="nav">
             <div className="navMenu">
                <h2>Vespucci Photograpghy</h2>
                <nav>
                  <Link to="/">Home</Link>
                  <a href="#about">About</a>
                  <a href="/#services">Services</a>
                  <Link to="/GalleryPage">Our Work</Link>
                  <a href="#contact">Contact</a>
                </nav>
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
.navMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
h2 {
  font-size: 3em;
  margin-left: 6px;
  color: #84577C;
  font-style: italic;
  font-family: Lobster Two, cursive;
}
nav {
display: flex;
justify-content: space-around;
width: 40%;
}
a {
  font-size: 1.5em;
  color: white;
  &:hover, &:focus{
    color: #84577C;
  }
}
`;

export default Nav;