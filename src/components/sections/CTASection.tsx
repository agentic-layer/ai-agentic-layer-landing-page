
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Calendar, Mail } from 'lucide-react';
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
            Zum Newsletter anmelden und mit Glück Konferenz-Tickets gewinnen.
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Mit deinem Newsletter-Abo bleibst du nicht nur auf dem Laufenden, sondern hast auch die Chance, Tickets für Top-Tech-Konferenzen wie die KI Navigator oder die CLC zu gewinnen. Wir freuen uns, wenn wir uns an unserem Stand oder in unseren Workshops weiter über das Thema Agentic AI mit dir austauschen können.
            <br /><br />
            Sneak Peek: Unser Kollege Mario-Leander Reimer hält auf der CLC seinen spannenden Workshop „Architektur und Aufbau einer Cloud-nativen AI-Plattform". Dieser bietet eine praktische Schritt-für-Schritt-Anleitung für das Design und den Aufbau von KI-Plattformen, sowohl lokal als auch in der Public Cloud.
            <br /><br />
            Jetzt anmelden, exklusive Einblicke sichern und vielleicht schon bald live dabei sein!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - GitHub */}
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Github className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">
                Explore the Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm flex-1">
                Unser Agentic Layer ist Open Source. Verfolgen Sie die Entwicklung, bringen Sie sich ein 
                und werden Sie Teil der Community.
              </p>
              <Button className="w-full mt-auto">
                <span className="hidden lg:inline">Zum GitHub-Repository</span>
                <span className="lg:hidden">GitHub-Repository</span>
              </Button>
            </CardContent>
          </Card>

          {/* Column 2 - Expert Consultation */}
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">
                Von der Strategie zur Umsetzung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm flex-1">
                Egal, ob Sie das strategische Potenzial für Ihr Unternehmen bewerten wollen oder bereits 
                ein konkretes Projektvorhaben haben: Buchen Sie eine kostenlose, unverbindliche Session. 
                Sprechen Sie mit unseren Gründern und Architekten über Ihre Ziele oder Ihre spezifische 
                technische Herausforderung.
              </p>
              <Button className="w-full mt-auto">
                <span className="hidden lg:inline">Gespräch mit Experten buchen</span>
                <span className="lg:hidden">Gespräch buchen</span>
              </Button>
            </CardContent>
          </Card>

          {/* Column 3 - Newsletter */}
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">Verfolgen Sie unsere Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm flex-1">
                Sie finden das Thema spannend, sind aber noch nicht bereit für den tiefen Einstieg? 
                Tragen Sie sich ein und wir informieren Sie gezielt über wichtige Projekt-Meilensteine, 
                wie den Launch unserer Public Beta oder kommende Live-Demos. Kein Spam, nur die wichtigen Updates.
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
                  <span className="hidden lg:inline">Über Meilensteine informieren</span>
                  <span className="lg:hidden">Newsletter</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
