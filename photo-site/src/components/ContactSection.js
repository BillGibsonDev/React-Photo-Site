import { useEffect } from 'react';

// on scroll animations
import Aos from 'aos';
import "aos/dist/aos.css";


// styled
import styled from "styled-components";

// components
import ContactForm from "./ContactForm";


const ContactSection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      },{});
return (
    <StyledContact id="contact" data-aos="zoom-in">
        <h2>Contact Vespucci Studios Today!</h2>
        <ContactForm />
    </StyledContact>

)
};
const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80vh;
    margin-top: 5%;
    background: #141414;
    border-radius: 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    h2 {
        font-size: 3em;
        margin: 1em 0;
        color: #84577C;
        @media (max-width: 750px){
        font-size: 2em;
        letter-spacing: 1px;
    } 
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
  font-size: 4em;
  letter-spacing: 1px;
}
`;

export default ContactSection;