import React from 'react';

//components
import Nav from './components/nav.js';
import Home from './components/home.js';
import About from './components/about.js';
import Work from './components/work.js';
import Services from './components/services.js';
import Contact from './components/contact.js';

//styles
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
