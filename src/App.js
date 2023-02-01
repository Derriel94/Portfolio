import './App.css';
import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js';
import ContactCard from './components/ContactCard/ContactCard.js';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<ContactCard />} />
      </Routes>
              <div className="spacer"></div>
      <div className="footer" style={{paddingBottom: "20px"}}>
        <a href="https://www.facebook.com/profile.php?id=100080613782116" target="_blank" rel="noreferrer" className="navLink">
          <img src="./fb.png" alt="facebook" />
        </a>
        <a href="https://www.linkedin.com/in/techmospage/" target="_blank" rel="noreferrer" className="navLink">
          <img src="./ln.png" alt="linkden" />
        </a>
        <a href="https://github.com/Derriel94" target="_blank" rel="noreferrer" className="navLink">
          <img src="./gh.png" alt="github" />
        </a>
      </div>
      <div className="spacer"></div>
      <Navbar />
      <div className="derrielcollins">
        <p>
          Copywright 2022©
          This website was Created by:
        </p>
        <a href="https://derrielcollins.site" target="_blank"  rel="noopener noreferrer">
          Derriel Collins
        </a>
      </div>
    </div>
    </BrowserRouter>
    );

}

export default App;
