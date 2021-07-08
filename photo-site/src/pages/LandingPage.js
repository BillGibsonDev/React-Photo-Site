
// components
import Home from '../components/homeSection.js';
import Service from '../components/serviceSection.js';
import About from '../components/aboutSection.js';
import ContactSection from '../components/ContactSection.js';


// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';


const LandingPage = () => {
    return (
        <motion.div variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <Home />
            <About />
            <Service />
            <ContactSection />
        </motion.div>
    )
}


export default LandingPage;