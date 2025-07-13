import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import GetInTouch from './components/GetInTouch';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <GetInTouch />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
};

export default App;