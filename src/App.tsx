import React from 'react';
import Hero from "./components/Hero"
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
