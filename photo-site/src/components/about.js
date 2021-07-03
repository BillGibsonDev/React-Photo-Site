import { useEffect }from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

// styled components
import styled from 'styled-components';

//image
import Studio from '../images/serverimg.jpg';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      },{});
    return (
        <StyledAbout id="about">
            <div className="imageWrapper" data-aos="zoom-in">
                <img src={Studio} alt="pic of Sal"/>
            </div>
            <div className="aboutTextWrapper" data-aos="zoom-in">
                <h1>About Sal</h1>
                <h3>My name is Sal Vespucci! I have had a camera in my hands since I was a child! My Studio and I love taking photos with my customer and their families! You can't replace the look on someone's face when they see the magic and beauty we can create with Photography! </h3>
            </div>
        </StyledAbout>
    )
}
const StyledAbout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 90vh;
margin-top: 5%;
background: #141414;
border-radius: 20px;
.aboutTextWrapper {
    width: 50%;
    margin: auto;
    h1 {
        font-size: 5em;
        color: #84577C;
        margin-bottom: 1em;
    }
    h3 {
        font-size: 2em;
        color: #d4d4d4;
        font-weight: 500;
    }
}
.imageWrapper {
    width: 42%;
}
img {
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    object-fit: cover;
}
`;
export default About;