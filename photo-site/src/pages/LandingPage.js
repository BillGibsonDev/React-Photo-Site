
// components
import Home from '../components/home.js';
import Service from '../components/services.js';
import About from '../components/about.js';

// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';

const LandingPage = () => {
    return (
        <motion.div variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <Home />
            <About />
            <Service />
        </motion.div>
    )
}


export default LandingPage;