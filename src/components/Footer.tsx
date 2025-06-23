
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img 
                  src="/lovable-uploads/332677ec-1043-44de-93b4-38aed623005d.png" 
                  alt="Golden Parrot Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl font-inter">Golden Parrot</span>
            </div>
            <p className="text-white/90 leading-relaxed">
              Professionelle AI-Video Produktion für moderne Unternehmen. 
              Wir bringen Ihre Marke mit innovativer Technologie zum Leben.
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
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Prozess
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-white transition-colors duration-300"
                >
                  Warum KI-Videos?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">
                  AGB
                </a>
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
              <span className="text-sm font-bold">Li</span>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm font-bold">X</span>
            </a>
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
