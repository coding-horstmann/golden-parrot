
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import BenefitsSection from '../components/BenefitsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter relative w-full overflow-x-hidden">
      {/* Unified gradient background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 via-black via-slate-800 via-slate-900 to-black -z-10"></div>
      
      <Header />
      <HeroSection />
      <ProcessSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
