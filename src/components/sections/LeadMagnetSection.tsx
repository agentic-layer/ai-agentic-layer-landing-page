
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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
            <div className="inline-block p-8 bg-primary-foreground/10 border border-primary-foreground/20">
              <div className="w-48 h-64 bg-primary-foreground/20 border border-primary-foreground/30 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-light">📖</div>
                  <p className="text-sm">Whitepaper Cover</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content & Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light">
                Vom Solisten zum Dirigenten
              </h2>
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
