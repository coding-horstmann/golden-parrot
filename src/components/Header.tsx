
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <span className="text-black font-bold text-sm">🦜</span>
            </div>
            <span className="text-white font-bold text-xl font-inter">Golden Parrot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Prozess
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Warum KI-Videos?
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-left"
              >
                Prozess
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-left"
              >
                Warum KI-Videos?
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-left"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
