import React from 'react'

//image
import Sal from '../styles/images/sal.jpg'

export default function about() {
    return (
        <div>
            <section id="about">
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
