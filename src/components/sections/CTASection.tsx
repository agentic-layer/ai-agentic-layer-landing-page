import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';
export function CTASection() {
  const [email, setEmail] = useState('');
  const {
    toast
  } = useToast();
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({
    delay: 200
  });
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Sie erhalten Updates zu unseren wichtigsten Meilensteinen."
    });
    setEmail('');
  };
  return <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            Agentic AI erleben?
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Zum Newsletter anmelden und<br />mit etwas Glück Konferenz-Tickets gewinnen.
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Mit deinem Newsletter-Abo bleibst du nicht nur auf dem Laufenden, sondern hast auch die Chance, Tickets für Top-Tech-Konferenzen wie die KI Navigator oder die CLC zu gewinnen. Wir freuen uns, wenn wir uns an unserem Stand oder in unseren Workshops weiter über das Thema Agentic AI mit dir austauschen können.
            <br /><br />
            Sneak Peek: Mario-Leander Reimer, CTO der QAware, hält auf der CLC seinen spannenden Workshop „Architektur und Aufbau einer Cloud-nativen AI-Plattform". Dieser bietet eine praktische Schritt-für-Schritt-Anleitung für das Design und den Aufbau von KI-Plattformen, sowohl lokal als auch in der Public Cloud.
            <br /><br />
            Jetzt anmelden, exklusive Einblicke sichern und vielleicht schon bald live dabei sein!
          </p>
        </div>

        <div className="flex justify-center" ref={cardRef}>
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col max-w-md w-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">Nimm Kontakt mit uns auf</CardTitle>
              
              {/* Two-column layout below headline */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex justify-center">
                  <img src="/lovable-uploads/177aaf0a-da67-4298-a8d4-3ce33d908677.png" alt="Team member" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-muted-foreground">
                    Das Agentic Layer Team freut sich über deine Kontaktaufnahme!
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3 mt-auto">
                
                <Button type="submit" className="w-full">E-Mail schreiben</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}