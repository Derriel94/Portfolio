import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js';
import ContactCard from './components/ContactCard/ContactCard.js';

const App = () => {
   const particleParams = {
    "particles": {
      "color": {
        "value": "#a5cfe3"
      },
      "links": {
        "color": {
          "value": "#a5cfe3"
        },
          "distance": 80,
          "enable": true,
          "opacity": 0.4,
          "shadow": {
            "color": {
              "value": "#a5cfe3",
              "opacity": 0.8,
            },
            "enable": true
          }
        },
        "move": {
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          }
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 80
        },
        "opacity": {
          "value": 0.5,
          "animation": {
            "speed": 1,
            "minimumValue": 0.1
          }
        },
        "shadow": {
          "blur": 5,
          "enable": true,
          "offset": {
            "x": 3,
            "y": 3
          }
        },
        "size": {
          "random": {
            "enable": true
          },
          "value": {
            "min": 1,
            "max": 5
          },
          "animation": {
            "speed": 20,
            "minimumValue": 0.1
          }
        }
      }
  };
  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<ContactCard />} />
      </Routes>
      
      <div className="footer">
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
    </div>
    );

}

export default App;
