import React from 'react';
import { FileText, Cpu, MessageSquare, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Briefing & Konzept',
      description: 'Wir definieren gemeinsam Ihre Ziele, Zielgruppe und entwickeln ein individuelles Storyboard.',
      icon: FileText,
    },
    {
      number: '2',
      title: 'KI-Produktion',
      description: 'Unsere KI-gestützte Videoproduktion verwandelt das Konzept in hochwertige Werbe‑ und Imagefilme.',
      icon: Cpu,
      isGradient: true,
    },
    {
      number: '3',
      title: 'Feedback & Optimierung',
      description: 'Sie prüfen den ersten Entwurf – wir passen Schnitt, Ton und Stil nach Ihrem Input an.',
      icon: MessageSquare,
    },
    {
      number: '4',
      title: 'Finalisierung & Lieferung',
      description: 'Nach Ihrer Freigabe erhalten Sie Ihr fertiges KI-Video.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      {/* Subtle overlay effects only */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6">
            <span className="text-white">Unser </span>
            <span className="bg-gradient-text-process bg-clip-text text-transparent">
              Prozess
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Von der Idee zum fertigen KI-Video in 4 Schritten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              {/* Glass Card */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:bg-black/40 transition-all duration-300 hover:transform hover:scale-105 text-center flex flex-col items-center">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-inter mb-3 text-white">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-4">
                  {step.description}
                </p>
                {/* Icon (jetzt unten) */}
                <div className="mt-auto flex justify-center">
                  <step.icon 
                    size={32} 
                    className="text-blue-400" 
                  />
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
