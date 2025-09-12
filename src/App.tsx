import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Magazine from './components/Magazine';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Events />
        <Magazine />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;