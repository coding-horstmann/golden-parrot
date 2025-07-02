import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/kontakt@golden-parrot.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: 'Neue Kontaktanfrage über das Formular',
          _captcha: 'false',
        }),
      });
      if (response.ok) {
        toast({
          title: 'Nachricht gesendet!',
          description: 'Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.',
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        toast({
          title: 'Fehler',
          description: 'Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.',
        });
      }
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Subtle overlay effects only */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-white mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Bereit für Ihr nächstes KI-Video? Jetzt beraten lassen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold font-inter text-white mb-6">
              Projekt anfragen
            </h3>
            
            <form 
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="Ihr Unternehmen"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="Beschreiben Sie Ihr Video-Projekt..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-button text-white px-6 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                disabled={loading}
              >
                <span>Nachricht senden</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-inter text-white mb-6">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-Mail</h4>
                    <p className="text-white/90">kontakt@golden-parrot.de</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold font-inter text-white mb-4">
                Antwortzeit
              </h3>
              <p className="text-white/90">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
