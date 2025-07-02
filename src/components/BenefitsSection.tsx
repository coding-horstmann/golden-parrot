import React from 'react';
import { Zap, DollarSign, Clock, Target } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Modernste KI-Technologie',
      description: 'Nutzen Sie neueste Entwicklungen in der KI Videoproduktion für atemberaubende Ergebnisse.',
    },
    {
      icon: DollarSign,
      title: 'Effizient & Kostensparend',
      description: 'Sparen Sie bis zu 70\u202F% gegenüber klassischer Videoproduktion',
    },
    {
      icon: Clock,
      title: 'Schnelle Umsetzung',
      description: 'Von der Idee zum fertigen Video in Tagen/Wochen statt Monaten.',
    },
    {
      icon: Target,
      title: 'Präzise Zielgruppenansprache',
      description: 'KI-optimierte Inhalte, die genau auf Ihre Zielgruppe zugeschnitten sind.',
    },
  ];

  return (
    <section id="benefits" className="py-20 relative">
      {/* Subtle overlay effects only */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6">
            <span className="text-white">Warum </span>
            <span className="bg-gradient-text-blue bg-clip-text text-transparent">
              KI-Videos?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entdecken Sie die Vorteile modernster KI-Technologie für Ihre Videoproduktion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              {/* Glass Card */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full hover:bg-black/40 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-button rounded-xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <benefit.icon size={32} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold font-inter text-white mb-4">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
