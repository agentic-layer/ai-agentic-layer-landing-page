

import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const features = [{
  title: "Souveräner Betrieb (BYOC & On-Premise)",
  description: "Behalten Sie die 100%ige Kontrolle über Ihre KI-Workloads. Unser Layer läuft in Ihrer bevorzugten Cloud-Umgebung oder komplett autark in Ihrem eigenen Rechenzentrum für maximale Datensouveränität."
}, {
  title: "Zentrale Governance & Agent Catalog",
  description: "Verhindern Sie unkontrollierten Wildwuchs (\"Agent Sprawl\"). Unsere zentrale Governance stellt sicher, dass alle Agenten nach Ihren Standards entwickelt, freigegeben und betrieben werden."
}, {
  title: "Agnostischer Model Router",
  description: "Nutzen Sie für jede Aufgabe das beste Werkzeug. Unser Model Router wählt dynamisch das passende Sprachmodell aus – von schnellen, schlanken Modellen für Routineaufgaben bis zu mächtigen, spezialisierten Modellen für komplexe Analysen."
}, {
  title: "Umfassende Observability & Audit-Logs",
  description: "Schaffen Sie Transparenz und Vertrauen in Ihre KI-Prozesse. Mit lückenlosen Audit-Logs und End-to-End-Tracing können Sie jede Entscheidung eines Agenten nachvollziehen und erklären."
}, {
  title: "Multi-Framework Agent Runtime",
  description: "Verkürzen Sie die Entwicklungszeit signifikant. Ihr Team muss sich nicht in ein proprietäres System einarbeiten, sondern kann sofort mit vertrauten Technologien und Frameworks produktiv sein."
}, {
  title: "Integrierte Agent Testbench",
  description: "Stellen Sie die Qualität und Zuverlässigkeit Ihrer Agenten vor dem Go-Live sicher. Unsere Testbench ermöglicht standardisierte Tests von Verhalten, Performance und Sicherheit."
}, {
  title: "Offene Standards für Zukunftssicherheit",
  description: "Investieren Sie in eine zukunftssichere, offene Architektur statt in eine geschlossene Blackbox. Unser Bekenntnis zu Standards wie A2A und MCP schützt Sie vor Vendor-Lock-in."
}];

export function ArchitectureSection() {
  return <section className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16">
          <h2 className="headline-text">
            Der Agentic Layer
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Ein offenes Fundament für Ihre souveräne KI-Workforce
          </p>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Architecture */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">
              Unsere Architektur für souveräne KI-Orchestrierung
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Architektur ist auf maximale Souveränität, Sicherheit und Interoperabilität ausgelegt. 
              Im Zentrum steht der modulare souveräne Agentic Layer, der als zentrales Nervensystem für Ihre 
              KI-Workforce fungiert. Er orchestriert, kontrolliert und sichert alle Agenten-Interaktionen in 
              Ihrer bestehenden IT-Landschaft.
            </p>
            
            {/* Architecture Diagram Placeholder */}
            <div className="aspect-square bg-muted/50 border-2 border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors flex items-center justify-center" style={{backgroundColor: '#292929'}}>
              <p className="text-muted-foreground text-center">
                System-Architektur-Skizze<br />
                (Diagramm wird hier eingefügt)
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">
              Technische Merkmale & Eigenschaften
            </h3>
            
            <div className="space-y-3">
              {features.map((feature, index) => <Collapsible key={index}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left border border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-accent transition-colors" style={{backgroundColor: '#292929'}}>
                    <span className="font-medium">{feature.title}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-muted/20 dark:bg-muted/80 border-x border-b border-muted-foreground/20">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CollapsibleContent>
                </Collapsible>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}

