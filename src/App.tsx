import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BookFeature from './components/BookFeature';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-[#fafaf9] selection:bg-accent-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BookFeature />
        <Services />
        <Testimonials />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;