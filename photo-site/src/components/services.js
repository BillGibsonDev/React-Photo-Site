import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Booking() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      },{});
    return (
        <div>
            <section id="services">
                <div className="booking-title">
                 <h1>Book With Sal Today!</h1>
                </div>
                <div className="booking-container">
                    <div className="row">
                     <div className="column">
                      <div className="card" data-aos="zoom-in">
                        <h4>Weddings</h4>
                        <div className="list">
                         <ul>
                          <li>Unlimited Coverage!</li>
                          <li>Unlimited Images!</li>
                          <li>Unlimited Retouching on any print or album in your package!</li>
                          <li>Consultation for wedding planning including Inviations, Caterers, Floral and Locations.</li>
                         </ul>
                         <p><b>Prices for Packages, Additional Photographer, Bridal Albums and Prints are available upon request.</b></p>
                        </div>
                      </div>
                      <div className="card" data-aos="zoom-in">
                        <h4>Photobooth</h4>
                         <div className="list">
                          <ul>
                           <li>4 hours of Coverage!</li>
                           <li>Unlimited Photos!</li>
                           <li>Custome Wedding Logo!</li>
                           <li>Props Included</li>
                           <li>Photo Strip Book</li>
                           <li>Picture Wedsite for 2 years!</li>
                          </ul>
                          <p><b>Photo booths have become a staple at every event in how they capture the guests' silliest moments. It is an absolute crowd-pleaser!</b></p>
                         </div>
                        </div>
                     </div>
                     <div className="column">
                      <div className="card" data-aos="zoom-in">
                       <h4>Beach Shoots</h4>
                       <div className="list">
                        <ul>
                         <li>Custom prints in Canvas, Metallic or Standard!</li>
                         <li>Includes retouching of choice photographic papers!</li>
                         <li>Glossy, Metallic, Luster and Canvas!</li>
                        </ul>
                        <p><b>Custom cards for your Wallet, Holidays or Storybook!</b></p>
                       </div>
                      </div>
                      <div className="btn-container" data-aos="zoom-in">
                        <button id="book-btn"><a href="#contact">Book Now!</a></button>
                      </div>
                      <div className="card" data-aos="zoom-in">
                        <h4>Headshots</h4>
                         <div className="list">
                          <ul>
                           <li>Rights to your image!</li>
                           <li>Includes 15 hours at 1 location</li>
                           <li>Photo website!</li>
                          </ul>
                            <p><b>When you need to stand apart from the crowd visit Portraits by Sal Vespucci!  Shoot with a Photographer that understands the business of making you look good!</b></p>
                         </div>
                        </div>
                    </div>
                  </div>
                </div>   
            </section>
        </div>
    )
}
