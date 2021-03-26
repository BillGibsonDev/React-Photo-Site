import React from 'react'

//icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faTwitter , faPinterest , faFacebookF } from "@fortawesome/free-brands-svg-icons";


export default function contact() {

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
             <div className="icon-container">
             <a href="https:/Instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x" color="white"/></a>
                 <a href="https://pinterest.com" target="_blank"><FontAwesomeIcon icon={faPinterest} size="3x" color="#c8232c"/></a>
                 <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="3x" color="#3b5998"/></a>
                 <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="3x" color="#1da1f2"/></a>
             </div>
             <div className="form-wrapper">
                <form action="https://formspree.io/f/mnqlaord"method="POST" >
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
