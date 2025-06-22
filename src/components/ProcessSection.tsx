
import React from 'react';
import { FileText, Cpu, MessageSquare, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Briefing & Konzept',
      description: 'Wir besprechen Ihre Ziele, Zielgruppe und erstellen ein maßgeschneidertes Konzept für Ihr Video.',
      icon: FileText,
    },
    {
      number: '2',
      title: 'KI-Produktion',
      description: 'Unsere fortschrittliche KI erstellt Ihr Video basierend auf dem abgestimmten Konzept.',
      icon: Cpu,
      isGradient: true,
    },
    {
      number: '3',
      title: 'Feedback & Optimierung',
      description: 'Sie erhalten eine Vorschau und wir optimieren das Video nach Ihrem Feedback.',
      icon: MessageSquare,
    },
    {
      number: '4',
      title: 'Finalisierung & Lieferung',
      description: 'Nach finaler Freigabe erhalten Sie Ihr fertiges Video in allen gewünschten Formaten.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-middle relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6">
            <span className="text-white">Unser </span>
            <span className="bg-gradient-text-process bg-clip-text text-transparent">
              Prozess
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            In nur 4 einfachen Schritten zu Ihrem professionellen Werbevideo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-button rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-4">
                  <step.icon 
                    size={32} 
                    className={step.isGradient ? "text-blue-400" : "text-blue-400"} 
                  />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold font-inter mb-3 ${
                  step.isGradient 
                    ? "bg-gradient-text-blue bg-clip-text text-transparent" 
                    : "text-white"
                }`}>
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
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
