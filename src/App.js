import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <div>
      <Banner />
      <About />
      <Faculty />
      <Contact />
      <BackToTopButton />
    </div>
  );
};

export default App;
