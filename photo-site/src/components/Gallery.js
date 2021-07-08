
// vespucci images
import wedding from '../images/wedding.jpg';
import wedding2 from '../images/wedding2.jpg';
import wedding3 from '../images/wedding3.jpg';
import wedding4 from '../images/wedding4.jpg';

// marathon images
import runner from '../images/runner.jpg';
import runner2 from '../images/runner2.jpg';
import runner3 from '../images/runner3.jpg';
import runner4 from '../images/runner4.jpg';


// festival images
import festival from '../images/festival.jpg';
import festival2 from '../images/festival2.jpg';
import festival3 from '../images/festival3.jpg';
import festival4 from '../images/festival4.jpg';

// styled
import styled from 'styled-components';

// slider library
import AwesomeSlider from 'react-awesome-slider';
import '../styles/styles.scss';


const Gallery = () => {
    return (
      <StyledGallery>
        <h2>Smith Wedding</h2>
        <AwesomeSlider>
          <div data-src={wedding} />
          <div data-src={wedding2} />
          <div data-src={wedding3} />
          <div data-src={wedding4} />
        </AwesomeSlider>
        <h2>Charity 5k</h2>
        <AwesomeSlider>
          <div data-src={runner} />
          <div data-src={runner2} />
          <div data-src={runner3} />
          <div data-src={runner4} />
        </AwesomeSlider>
        <h2>Shiny Festival</h2>
        <AwesomeSlider >
          <div data-src={festival} />
          <div data-src={festival2} />
          <div data-src={festival3} />
          <div data-src={festival4} />
        </AwesomeSlider>
      </StyledGallery>
    );
};
const StyledGallery = styled.div`
height: 100%;
width: 90%;
margin: 5% auto;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
@media (max-width: 750px) {
  margin-bottom: 2em;
}
h2 {
  font-size: 3em;
  color: #84577C;
  margin-top: 2em;
  @media (max-width: 750px) {
    margin-top: 4em;
  }
}
`;

  

  export default Gallery;