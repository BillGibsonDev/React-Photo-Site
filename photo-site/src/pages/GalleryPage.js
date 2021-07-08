
// components
import Gallery from "../components/Gallery.js";

// styles 
import styled from 'styled-components';

// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';

const GalleryPage = () => {
    return (
        <StyledGallery id="work" variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <Gallery />
        </StyledGallery>
        
    )
}
const StyledGallery = styled(motion.div)`
   height: 90%;
   width: 100%;
   margin: auto;
   margin-top: 12%;
   background: #141414c1;
   border-radius: 20px;
   
    `;
 
export default GalleryPage;