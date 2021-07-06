
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
        <StyledContact id="contact">
            <h2>Stay Connected</h2>
                <div className="iconContainer" >
                    <a href="https://Instagram.com" target="_blank"><img src={Instagram} alt="" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src={Linkedin} alt="" /></a>
                    <a href="https://facebook.com" target="_blank"><img src={FaceBook} alt="" /></a>
                    <a href="https://twitter.com" target="_blank"><img src={Twitter} alt="" /></a>
                </div>
                <div className="formWrapper"  >
                    <h4>Contact Us Today!</h4>
                    <ContactForm />
                </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    background: #141414c1;
    margin-top: 5%;
    border-radius: 20px;
    position: relative;
    width: 100%;
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
        width: 40%;
        align-items: center;
        img {
            margin: 1.5em;
            cursor: pointer;
        }
    }
    .formWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 {
        font-size: 1.5em;
        margin-bottom: 12px;
        color: White;
        letter-spacing: 1px;
    }
    p {
  color: #84577C;
  font-size: 1em;
  letter-spacing: 1px;
}
`;


export default Footer;