
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { BookOpen } from 'lucide-react';

export function LeadMagnetSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Vielen Dank!",
      description: "Ihr Whitepaper wird in Kürze an Ihre E-Mail-Adresse gesendet.",
    });
    setEmail('');
  };

  return (
    <section className="py-20 section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Whitepaper Visual */}
          <div className="text-center lg:text-left">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <img 
                src="/lovable-uploads/cefdaae7-8648-4d2b-b595-4caeb84a8c07.png" 
                alt="Das Gen-AI-Paradoxon Whitepaper Cover"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right - Content & Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light">
                  Vom Solisten zum Dirigenten
                </h2>
              </div>
              <p className="text-xl opacity-90">
                Verstehen Sie die Theorie hinter der Praxis. Unser Whitepaper gibt Ihnen die 
                vollständige Partitur für Ihre KI-Strategie.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Was Sie im Whitepaper lernen:</h3>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <span className="block w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <span>Die 5 größten Fallen bei der KI-Implementierung und wie Sie sie vermeiden</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="block w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <span>Eine Blaupause für eine EU AI Act-konforme Architektur</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="block w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <span>Praxiserprobte Strategien zur souveränen KI-Orchestrierung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="block w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></span>
                  <span>ROI-Berechnungen für Agentic AI Projekte</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Geschäftliche E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-black text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Jetzt kostenlos herunterladen
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
