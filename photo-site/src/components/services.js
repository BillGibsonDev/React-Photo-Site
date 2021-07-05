import { useEffect }from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


// styles 
import styled from "styled-components";

//images 
import Cash from '../images/cash.svg';
import Time from '../images/time.svg';
import Camera from '../images/camera.svg';
import Teamwork from '../images/teamwork.svg';
import ServiceImage from '../images/serviceImage.jpg';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      },{});
    return (
        <StyledService id="services" data-aos="zoom-in">
            <h2>Why Choose Vespucci?</h2>
            <div className="textContainer" >
                <article className="serviceCard">
                    <div className="titleWrapper">
                        <img src={Cash} alt="money icon" />
                        <h3>Cost Effective</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    autem accusamus ex laboriosam porro, adipisci quam voluptatum
                    magnam placeat corporis.</p>
                </article>
                <article className="serviceCard">
                    <div className="titleWrapper">
                        <img src={Camera} alt="camera icon" />
                        <h3>Proffesional</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    autem accusamus ex laboriosam porro, adipisci quam voluptatum
                    magnam placeat corporis.</p>
                </article>
                <article className="serviceCard">
                    <div className="titleWrapper">
                        <img src={Teamwork} alt="teamwork icon" />
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    autem accusamus ex laboriosam porro, adipisci quam voluptatum
                    magnam placeat corporis.</p>
                </article>
                <article className="serviceCard">
                    <div className="titleWrapper">
                        <img src={Time} alt="time icon" />
                        <h3>Timely Service</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    autem accusamus ex laboriosam porro, adipisci quam voluptatum
                    magnam placeat corporis.</p>
                </article>
            </div> 
            <img src={ServiceImage} alt="" data-aos="zoom-in"/>
        </StyledService>
    )
}
// styled components
const StyledService = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
margin: 5% auto;
width: 100%;
background: #141414;
border-radius: 20px;
position: relative;
h2 {
    position: absolute;
    font-size: 3em;
    top: 0;
    left: 10%;
    color: #84577C;
}
.textContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 10em;
    grid-column-gap: 1em;
    width: 50%;
    margin: 1em;
 article{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    .titleWrapper {
        display: flex;
        align-items: center;
        margin-bottom: .5em;
        img {
            width: 50px;
            margin-right: 1em;
        }
        h3 {
            color: white;
            font-size: 1.8em;
        }
    }
    p {
        color: #d3d3d3ca;
        font-size: 1.2em;
    }
 }
}
 img {
     width: 42%;
     border-radius: 20px;
 }

`;


export default Services;