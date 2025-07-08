
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingUp } from 'lucide-react';

const agents = [{
  title: "Sovereign Claims Agent",
  description: "Unser Agent für die Versicherungsbranche automatisiert die Prüfung, Bewertung und erste Bearbeitung von Schadensmeldungen. Er reduziert die Bearbeitungszeit von Tagen auf Minuten und gibt Ihren Experten Zeit für die wirklich komplexen Fälle.",
  icon: Shield
}, {
  title: "Sovereign Sales Advisor",
  description: "Dieser Agent unterstützt Ihren Vertrieb, indem er Leads qualifiziert, personalisierte Angebote vorbereitet und Routineanfragen autonom beantwortet. So kann sich Ihr Team auf den Abschluss der wichtigsten Deals konzentrieren.",
  icon: TrendingUp
}];

export function SpecializedAgentsSection() {
  return <section id="agents" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16">
          <h2 className="headline-text">
            Mehr als nur ein Layer: Unsere spezialisierten Agenten für Ihre Kernprozesse
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Sehen Sie, wie unser Agentic Layer Kernprozesse in der Versicherungsbranche automatisiert.
          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-medium">
                    {agent.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
}
