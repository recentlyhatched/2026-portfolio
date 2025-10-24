import React from 'react';
import Hero from "./components/Hero"
import About from './components/About';
import Projects from './components/Projects';
import Links from './components/Links'

function App() {
  const date = new Date()
  
  return (
    <div className="scroll-smooth font-sans">
      <Hero />
      <About />
      <Projects />
      <Links />
      <footer className="text-center text-sm text-gray-500 py-4">
        {"Updated " + date.getMonth() + "/" + date.getFullYear()}
      </footer>
    </div>
  );
}

export default App;
