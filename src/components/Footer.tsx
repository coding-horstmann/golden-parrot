import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const sec = document.getElementById(sectionId);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleDatenschutzClick = (e: React.MouseEvent) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleImpressumClick = (e: React.MouseEvent) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/332677ec-1043-44de-93b4-38aed623005d.png" 
                  alt="Golden Parrot Logo" 
                  className="w-16 h-16 object-contain inline-block align-middle"
                />
                <span className="text-white font-bold text-xl font-inter align-middle ml-2">Golden Parrot</span>
              </Link>
            </div>
            <p className="text-white/90 leading-relaxed">
              Professionelle KI Videoproduktion für Startups, E‑Commerce und KMU. Mit KI-gestütztem Video Marketing bringen wir Ihre Marke ins Rampenlicht.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-inter">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Prozess
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Warum KI-Videos?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-inter">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-white/90 hover:text-white transition-colors duration-300" onClick={handleImpressumClick}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/90 hover:text-white transition-colors duration-300" onClick={handleDatenschutzClick}>
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90 text-sm">
            © 2024 Golden Parrot. Alle Rechte vorbehalten.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm font-bold">In</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
