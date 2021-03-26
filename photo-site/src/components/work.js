import React, { useState, useEffect }from 'react';




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
    
    return (
        <div>
            <section id="work">
                <div className="work-title">
                 <h1>Heres Some of my Work!</h1>
                </div>
             <div className="row">
              <div className="column">
               <img src={Wedding1}/>
               <img src={Nature}/>
               <img src={Love1}/>
               <img src={City}/>
              </div>
              <div className="column">
                <img src={Wedding2}/>
                <img src={Pride}/>
                <img src={Love2}/>
                <img src={Family3}/>
              </div>
              <div className="column">
                <img src={Baby1}/>
                <img src={Sad1}/>
                <img src={IDK}/>
                <img src={Sad2}/>
              </div>
              <div className="column">
                <img src={Baby2}/>
                <img src={Happy}/>
                <img src={Family}/>
                <img src={Family2}/>
              </div>
             </div>
            </section>
        </div>
        
    )
}
