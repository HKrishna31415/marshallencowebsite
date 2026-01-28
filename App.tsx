import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ValueSection } from './components/ValueSection';
import { LocationsSection } from './components/LocationsSection';
import { RevenueSection } from './components/RevenueSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />
      <HeroSection />
      <LocationsSection />
      <AboutSection />
      <RevenueSection />
      <ValueSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;