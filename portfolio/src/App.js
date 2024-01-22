import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Skills from './pages/skills/Skills';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />  
     
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
        
      </Routes>
     
    </div>
  );
}

export default App;
