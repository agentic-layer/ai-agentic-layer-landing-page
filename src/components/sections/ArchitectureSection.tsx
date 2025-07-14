
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [{
  title: "Souveräner Betrieb (BYOC & On-Premise)",
  description: "Der Agentic Layer ermöglicht den vollständigen Betrieb von KI-Workloads in der vom Kunden bevorzugten Cloud-Umgebung (Bring Your Own Cloud) oder autark im eigenen Rechenzentrum. Dies gewährleistet 100%ige Kontrolle und maximale Datensouveränität über die gesamte KI-Infrastruktur."
}, {
  title: "Zentrale Governance & Agent Catalog",
  description: "Eine zentrale Governance-Schicht verhindert unkontrollierten \"Agent Sprawl\". Sie stellt sicher, dass alle Agenten konsistent nach definierten Standards entwickelt, freigegeben und betrieben werden können. Der integrierte Agent Catalog dient zur Verwaltung und Organisation der Agenten-Workforce."
}, {
  title: "Agnostischer Model Router",
  description: "Der Model Router ermöglicht die dynamische Auswahl des optimalen KI-Modells für jede spezifische Aufgabe. Er routet Anfragen intelligent zu passenden Modellen, von schnellen Modellen für Routineaufgaben bis zu spezialisierten Modellen für komplexe Analysen. Dies sichert maximale Flexibilität bei der Modellnutzung."
}, {
  title: "Umfassende Observability & Audit-Logs",
  description: "Das System bietet tiefe Einblicke in KI-Prozesse durch umfassende Observability-Funktionen. Lückenlose Audit-Logs und End-to-End-Tracing ermöglichen die vollständige Nachvollziehbarkeit und Erklärbarkeit jeder einzelnen Agentenentscheidung, was Transparenz und Vertrauen schafft."
}, {
  title: "Multi-Framework Agent Runtime",
  description: "Die Agent Runtime unterstützt den Betrieb von KI-Agenten, die mit verschiedenen Technologien und Frameworks entwickelt wurden. Dies reduziert die Einarbeitungszeit und ermöglicht Teams, sofort mit vertrauten Werkzeugen produktiv zu sein, wodurch die Entwicklungszeit signifikant verkürzt wird."
}, {
  title: "Integrierte Agent Testbench",
  description: "Eine integrierte Testumgebung ermöglicht die systematische Validierung von Agenten vor dem produktiven Einsatz. Die Testbench unterstützt standardisierte Tests für das Verhalten, die Performance und die Sicherheit der Agenten, um deren Qualität und Zuverlässigkeit sicherzustellen."
}, {
  title: "Offene Standards für Zukunftssicherheit",
  description: "Das System basiert auf einer offenen Architektur und verpflichtet sich zu Industriestandards wie A2A (Agent-to-Agent Communication) und MCP (Multi-Agent Communication Protocol). Dies schützt vor Vendor-Lock-in und gewährleistet eine zukunftssichere, flexible und erweiterbare Infrastruktur."
}];

export function ArchitectureSection() {
  return <section id="architecture" className="py-20 section-padding bg-black text-white">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16">
          <h2 className="headline-text">
            So funktioniert der Agentic Layer
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            Das technische Rückgrat für smarte Workloads.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Architecture */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              Architektur Blueprint
            </h3>
            <p className="text-gray-300 leading-relaxed md:text-center lg:text-left">
              Du baust smarte Agenten? Wir liefern dir das Fundament. Unsere Architektur ist auf maximale Souveränität,
              Sicherheit und nahtlose Interoperabilität ausgelegt. Der Agentic Layer fungiert als zentrales Nervensystem
              deiner KI-Workforce: Er ist modular aufgebaut und bietet die notwendigen Abstraktionen, um deine Agenten
              zu orchestrieren, zu kontrollieren und sicher in deiner bestehenden IT-Landschaft zu integrieren.
            </p>

            {/* Architecture Diagram Placeholder */}
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  System-Architektur-Skizze<br />
                  (Diagramm wird hier eingefügt)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              Technische Merkmale & Eigenschaften
            </h3>

            <Accordion type="multiple" className="space-y-3">
              {features.map((feature, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <Card className="border-2 hover:border-primary/20 transition-colors">
                    <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left hover:no-underline text-foreground">
                      <span className="font-medium">{feature.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
}
