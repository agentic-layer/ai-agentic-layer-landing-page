
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function CTASection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Sie erhalten Updates zu unseren wichtigsten Meilensteinen."
    });
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16">
          <h2 className="headline-text">
            Agentic AI erleben?
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Zum Newsletter anmelden und<br />mit Glück Konferenz-Tickets gewinnen.
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Mit deinem Newsletter-Abo bleibst du nicht nur auf dem Laufenden, sondern hast auch die Chance, Tickets für Top-Tech-Konferenzen wie die KI Navigator oder die CLC zu gewinnen. Wir freuen uns, wenn wir uns an unserem Stand oder in unseren Workshops weiter über das Thema Agentic AI mit dir austauschen können.
            <br /><br />
            Sneak Peek: Unser Kollege Mario-Leander Reimer hält auf der CLC seinen spannenden Workshop „Architektur und Aufbau einer Cloud-nativen AI-Plattform". Dieser bietet eine praktische Schritt-für-Schritt-Anleitung für das Design und den Aufbau von KI-Plattformen, sowohl lokal als auch in der Public Cloud.
            <br /><br />
            Jetzt anmelden, exklusive Einblicke sichern und vielleicht schon bald live dabei sein!
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col max-w-md w-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">Verfolge unsere Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm flex-1">
                Kein Spam. Nur relevante Entwicklungen rund um den Agentic Layer. Versprochen!
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3 mt-auto">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Zum Newsletter anmelden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
