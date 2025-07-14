
import React from 'react';
import { Shield, Infinity, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Custom Dirigentenstab icon as SVG
const DirigentenStabIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="3"/>
    <circle cx="18" cy="6" r="3"/>
    <path d="m6 15 3-3"/>
  </svg>
);

const benefits = [
  {
    icon: Shield,
    title: "Souveränität & Kontrolle",
    description: "Behalten Sie die volle Hoheit über Ihre Daten, Modelle und Infrastruktur. Betrieb in Ihrer Cloud oder On-Premise – Sie entscheiden."
  },
  {
    icon: DirigentenStabIcon,
    title: "Intelligente Orchestrierung",
    description: "Transformieren Sie isolierte KI-Aufrufe in koordinierte, unternehmensweite Prozesse. Unser Layer verteilt, steuert und überwacht Ihre gesamte Agenten-Workforce."
  },
  {
    icon: Infinity,
    title: "Open Source & Agnostisch",
    description: "Kein Vendor-Lock-in. Unser Open-Source-Ansatz schafft volle Transparenz, während das agnostische Design die freie Wahl von Clouds, Modellen und Tools garantiert."
  },
  {
    icon: BadgeCheck,
    title: "Compliance by Design",
    description: "Erfüllen Sie mühelos die Anforderungen von EU AI Act und DSGVO durch integrierte Governance, Transparenz und Audit-Fähigkeit."
  }
];

export function BusinessBenefitsSection() {
  return (
    <section id="benefits" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16">
          <h2 className="headline-text">
            Deine Brücke zur souveränen KI-Orchestrierung
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Wir geben dir die Kontrolle, Sicherheit und Flexibilität, damit du das volle Potenzial von Agentic AI in deinem Unternehmen entfesseln kannst.
            <br/>
            <span className="font-medium">Kein Boilerplate, keine Kopfschmerzen.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-medium">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
