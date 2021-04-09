import React, { useEffect }from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



//images
import Wedding1 from '../styles/images/wedding1.jpg';
import Wedding2 from '../styles/images/wedding2.jpg';
import Love1 from '../styles/images/love1.jpg';
import Love2 from '../styles/images/love2.jpg';
import Baby1 from '../styles/images/baby1.jpg';
import Baby2 from '../styles/images/baby2.jpg';
import Family from '../styles/images/family.jpg';
import Family2 from '../styles/images/family2.jpg';
import Family3 from '../styles/images/family3.jpg';
import Happy from '../styles/images/happy1.jpg';
import Pride from '../styles/images/pride1.jpg';
import Sad1 from '../styles/images/sad1.jpg';
import Sad2 from '../styles/images/sad2.jpg';
import Nature from '../styles/images/nature.jpg';
import IDK from '../styles/images/idk.jpg';
import City from '../styles/images/city.jpg';


export default function Work() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    },{});
    return (
        <div>
            <section id="work">
                <div data-aos="fade-up" className="work-title">
                 <h1>Heres Some of my Work!</h1>
                </div>
             <div className="row">
              <div className="column">
               <img data-aos="fade-up" src={Wedding1}/>
               <img data-aos="fade-up" src={Nature}/>
               <img data-aos="fade-up" src={Love1}/>
               <img data-aos="fade-up" src={City}/>
              </div>
              <div className="column">
                <img data-aos="fade-up" src={Wedding2}/>
                <img data-aos="fade-up" src={Pride}/>
                <img data-aos="fade-up" src={Love2}/>
                <img data-aos="fade-up" src={Family3}/>
              </div>
              <div className="column">
                <img data-aos="fade-up" src={Baby2}/>
                <img data-aos="fade-up" src={Happy}/>
                 <div className="button-container">
                  <a data-aos="fade-up" id="work-btn" href="#services">Services</a>
                  <a data-aos="fade-up" id="work-btn"href="#contact">Contact</a>
                 </div>
                <img data-aos="fade-up" src={Family}/>
                <img data-aos="fade-up" src={Family2}/>
              </div>
              <div className="column" id="last-column">
                <img data-aos="fade-up" src={Baby1}/>
                <img data-aos="fade-up" src={Sad1}/>
                <img data-aos="fade-up" src={IDK}/>
                <img data-aos="fade-up" src={Sad2}/>
              </div>
             </div>
            </section>
        </div>
        
    )
}
