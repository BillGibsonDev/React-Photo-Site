
// styled components
import styled from 'styled-components';

// images
import FaceBook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Linkedin from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';

// components
import ContactForm from './ContactForm';



const Footer = () => {

    function handleSubmit(e) {
        e.preventDefault()
    }

    function clearForm(){
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('phone').value='';
        document.getElementById('message').value='';
        }
    return (
        <StyledContact>
            <h2>Stay Connected</h2>
                <div className="iconContainer" >
                    <a href="https://Instagram.com" target="_blank"><img src={Instagram} alt="" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src={Linkedin} alt="" /></a>
                    <a href="https://facebook.com" target="_blank"><img src={FaceBook} alt="" /></a>
                    <a href="https://twitter.com" target="_blank"><img src={Twitter} alt="" /></a>
                </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    background: #141414c1;
    margin-top: 5%;
    border-radius: 20px;
    position: relative;
    width: 100%;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    @media (max-width: 750px) {
        height: 20vh;
    }
    h2 {
        position: absolute;
        left: 25%;
        width: 50%;
        margin: 1em auto;
        color: white;
        letter-spacing: 1px;
        border-bottom: #84577C solid 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }   
    .iconContainer {
        display: flex;
        width: 100%;
        align-items: center;
        margin: auto;
        justify-content: center;
        img {
            margin: 1.5em;
            cursor: pointer;
        }
    }

`;


export default Footer;