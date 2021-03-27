import React, { useEffect }from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

//image
import Sal from '../styles/images/sal.jpg'

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      },{});
    return (
        <div>
            <section id="about"  data-aos="zoom-in" >
                <div className="about-wrapper">
                 <h1>About Sal</h1>
                 <h3>My name is Sal Vespucci! I have had a camera in my hands since I was a child! I love taking photos with my customer and their families! You can't replace the look on someone's face when they see the magic and beauty we can create with Photography! </h3>
                </div>
                <div className="image-wrapper">
                 <img src={Sal} alt="pic of Sal"/>
                </div>
            </section>
        </div>
    )
}
