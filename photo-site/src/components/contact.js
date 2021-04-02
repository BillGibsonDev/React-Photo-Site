import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

//icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faTwitterSquare , faPinterestSquare , faFacebookSquare } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      },{});

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
        <div>
            <section id="contact">
             <div className="icon-container" data-aos="fade">
                <a href="https://Instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="4x" id="instagram" /></a>
                <a href="https://pinterest.com" target="_blank"><FontAwesomeIcon icon={faPinterestSquare} size="4x" id="pinterest" /></a>
                <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="4x" id="facebook"/></a>
                <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="4x" id="twitter"/></a>
             </div>
             <div className="form-wrapper" data-aos="zoom-in" >
                <form>
                 <h4>Contact Sal Today!</h4>
                 <label htmlFor="name">Name:
                     <input type="name" id="name" required/>
                 </label>
                 <label htmlFor="email">Email:
                     <input type="email" id="email" required/>
                 </label>
                 <label htmlFor="phone">Phone:
                     <input type="text" id="phone" required/>
                 </label>
                     <textarea type="text" cols="50" rows="10" placeholder="Message here!" id="message" required />
                 <button type="submit" onSubmit={()=>{handleSubmit(); clearForm();}}>Send</button>
                </form>
             </div>
            </section>
        </div>
    )
}
