
// images
import Wedding1 from '../images/wedding1.jpg';
import Wedding2 from '../images/wedding2.jpg';
import Love1 from '../images/love1.jpg';
import Love2 from '../images/love2.jpg';
import Baby1 from '../images/baby1.jpg';
import Baby2 from '../images/baby2.jpg';
import Family from '../images/family.jpg';
import Family2 from '../images/family2.jpg';
import Family3 from '../images/family3.jpg';
import Happy from '../images/happy1.jpg';
import Pride from '../images/pride1.jpg';
import Sad1 from '../images/sad1.jpg';
import Sad2 from '../images/sad2.jpg';
import Nature from '../images/nature.jpg';
import IDK from '../images/idk.jpg';
import City from '../images/city.jpg';

// react gallery
import { Carousel } from "react-responsive-carousel";

// styled
import styled from 'styled-components';


const Gallery = () => (
  <StyledGallery>
    <h1>Our Gallery</h1>
  <Carousel autoPlay>
    <div>
      <img alt="" src={Wedding1} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Wedding2} size="1000px"/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={Love1} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src={Love2} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src={Baby1} />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src={Baby2} />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img alt="" src={Family} />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img alt="" src={Family2} />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" src={Family3} />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src={Happy} />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" src={Pride} />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" src={Sad1} />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" src={Sad2} />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src={Nature} />
      <p className="legend">Legend 14</p>
    </div>
    <div>
      <img alt="" src={City} />
      <p className="legend">Legend 14</p>
    </div>
    <div>
      <img alt="" src={IDK} />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
  </StyledGallery>
);

const StyledGallery = styled.div`
height: 120vh;
width: 70%;
margin: 5% auto;
display: flex;
flex-direction: column;
align-items: center;
h1 {
  font-size: 3em;
  color: #84577C;
  margin: 2% auto;
}
.selected {
  width: 70%;
}
img {
  width: 100%;
}
`;

export default Gallery;
