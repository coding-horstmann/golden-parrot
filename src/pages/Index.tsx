
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import BenefitsSection from '../components/BenefitsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-inter">
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
