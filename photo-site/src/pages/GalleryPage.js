import { useEffect }from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

// components
import Gallery from "../components/Gallery.js";


// styles 
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryPage = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    },{});
    
    return (
        <StyledGallery id="work">
            <Gallery />
        </StyledGallery>
        
    )
}
const StyledGallery = styled.div`
   height: 90%;
   width: 100%;
   margin: auto;
   background: #141414c1;
   .carousel {
     height: 90vh;
     object-fit: cover;
     }
   
 `;
 
export default GalleryPage;