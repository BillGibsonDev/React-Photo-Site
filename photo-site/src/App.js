import React from 'react';

// router
import { Switch, Route, useLocation } from 'react-router-dom';


//components
import Nav from './components/nav.js';
import Footer from './components/Footer.js';

// pages
import LandingPage from './pages/LandingPage.js';
import GalleryPage from './pages/GalleryPage.js';


// styled components
import GlobalStyles from './GlobalStyles';


// animations
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/GalleryPage" exact>
            <GalleryPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
