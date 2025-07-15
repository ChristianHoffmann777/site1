import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Stats from './components/Stats';
import History from './components/History';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Header />
      <Hero />
      <About />
      <Offerings />
      <Stats />
      <History />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;