
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Subtle overlay effects only */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 leading-tight">
            <span className="text-white">Lass dein </span>
            <span className="bg-gradient-text-blue bg-clip-text text-transparent">
              Werbevideo
            </span>
            <span className="text-white"> von uns erstellen</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionelle Videos mit modernster KI-Technologie. 
            Schneller, kostengünstiger und beeindruckender als je zuvor.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center space-x-2 bg-gradient-button text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Jetzt Video erstellen lassen</span>
            <ArrowRight size={20} />
          </button>
          
          {/* Golden Parrot Visual Element */}
          <div className="mt-16 relative">
            <img 
              src="/lovable-uploads/332677ec-1043-44de-93b4-38aed623005d.png" 
              alt="Golden Parrot Logo" 
              className="w-48 h-48 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
