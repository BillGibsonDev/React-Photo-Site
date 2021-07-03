import React from 'react';

// router
import { Switch, Route } from 'react-router-dom';


//components
import Nav from './components/nav.js';
import Footer from './components/Footer.js';

// pages
import LandingPage from './pages/LandingPage.js';
import GalleryPage from './pages/GalleryPage.js';


// styled components
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Nav />
        <Switch >
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/GalleryPage" exact>
            <GalleryPage />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
