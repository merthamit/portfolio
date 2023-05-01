import React, { useState } from 'react';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import './App.css';
import 'animate.css';
import { MenuContext } from './context/MenuContext';

const App = () => {
  const [currSection, setCurrSection] = useState('home');
  return (
    <MenuContext.Provider value={{ currSection, setCurrSection }}>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </MenuContext.Provider>
  );
};

export default App;
