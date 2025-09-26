
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const featuresData = [
  {
    titleKey: "Souveräner Betrieb (BYOC & On-Premise)",
    descriptionKey: "Der Agentic Layer ermöglicht den vollständigen Betrieb von KI-Workloads in der vom Kunden bevorzugten Cloud-Umgebung (Bring Your Own Cloud) oder autark im eigenen Rechenzentrum. Dies gewährleistet 100%ige Kontrolle und maximale Datensouveränität über die gesamte KI-Infrastruktur."
  },
  {
    titleKey: "Zentrale Governance & Agent Catalog",
    descriptionKey: "Eine zentrale Governance-Schicht verhindert unkontrollierten \"Agent Sprawl\". Sie stellt sicher, dass alle Agenten konsistent nach definierten Standards entwickelt, freigegeben und betrieben werden können. Der integrierte Agent Catalog dient zur Verwaltung und Organisation der Agenten-Workforce."
  },
  {
    titleKey: "Agnostischer AI Gateway",
    descriptionKey: "Der AI Gateway ermöglicht die dynamische Auswahl des optimalen KI-Modells für jede spezifische Aufgabe. Er routet Anfragen intelligent zu passenden Modellen, von schnellen Modellen für Routineaufgaben bis zu spezialisierten Modellen für komplexe Analysen. Dies sichert maximale Flexibilität bei der Modellnutzung."
  },
  {
    titleKey: "Umfassende Observability & Audit-Logs",
    descriptionKey: "Das System bietet tiefe Einblicke in KI-Prozesse durch umfassende Observability-Funktionen. Lückenlose Audit-Logs und End-to-End-Tracing ermöglichen die vollständige Nachvollziehbarkeit und Erklärbarkeit jeder einzelnen Agentenentscheidung, was Transparenz und Vertrauen schafft."
  },
  {
    titleKey: "Multi-Framework Agent Runtime",
    descriptionKey: "Die Agent Runtime unterstützt den Betrieb von KI-Agenten, die mit verschiedenen Technologien und Frameworks entwickelt wurden. Dies reduziert die Einarbeitungszeit und ermöglicht Teams, sofort mit vertrauten Werkzeugen produktiv zu sein, wodurch die Entwicklungszeit signifikant verkürzt wird."
  },
  {
    titleKey: "Integrierte Agent Testbench",
    descriptionKey: "Eine integrierte Testumgebung ermöglicht die systematische Validierung von Agenten vor dem produktiven Einsatz. Die Testbench unterstützt standardisierte Tests für das Verhalten, die Performance und die Sicherheit der Agenten, um deren Qualität und Zuverlässigkeit sicherzustellen."
  },
  {
    titleKey: "Offene Standards für Zukunftssicherheit",
    descriptionKey: "Das System basiert auf einer offenen Architektur und verpflichtet sich zu Industriestandards wie A2A (Agent-to-Agent Communication) und MCP (Multi-Agent Communication Protocol). Dies schützt vor Vendor-Lock-in und gewährleistet eine zukunftssichere, flexible und erweiterbare Infrastruktur."
  }
];

export function ArchitectureSection() {
  const headerRef = useScrollReveal();
  const leftColumnRef = useScrollReveal({ delay: 200 });
  const rightColumnRef = useScrollReveal({ delay: 400 });
  const { t, language } = useLanguage();

  // For German, use the original text; for English, use basic translations
  const getFeatureText = (text: string) => {
    if (language === 'de') {
      return text;
    }
    // Basic English translations for architecture features
    const translations: { [key: string]: string } = {
      "Souveräner Betrieb (BYOC & On-Premise)": "Sovereign Operation (BYOC & On-Premise)",
      "Zentrale Governance & Agent Catalog": "Central Governance & Agent Catalog",
      "Agnostischer AI Gateway": "Agnostic AI Gateway",
      "Umfassende Observability & Audit-Logs": "Comprehensive Observability & Audit Logs",
      "Multi-Framework Agent Runtime": "Multi-Framework Agent Runtime",
      "Integrierte Agent Testbench": "Integrated Agent Testbench",
      "Offene Standards für Zukunftssicherheit": "Open Standards for Future-Proofing",
    };
    return translations[text] || text;
  };

  const getFeatureDescription = (text: string) => {
    if (language === 'de') {
      return text;
    }
    // For English, provide basic translations
    const descriptions: { [key: string]: string } = {
      "Der Agentic Layer ermöglicht den vollständigen Betrieb von KI-Workloads in der vom Kunden bevorzugten Cloud-Umgebung (Bring Your Own Cloud) oder autark im eigenen Rechenzentrum. Dies gewährleistet 100%ige Kontrolle und maximale Datensouveränität über die gesamte KI-Infrastruktur.": "The Agentic Layer enables complete operation of AI workloads in the customer's preferred cloud environment (Bring Your Own Cloud) or autonomously in their own data center. This ensures 100% control and maximum data sovereignty over the entire AI infrastructure.",
      "Eine zentrale Governance-Schicht verhindert unkontrollierten \"Agent Sprawl\". Sie stellt sicher, dass alle Agenten konsistent nach definierten Standards entwickelt, freigegeben und betrieben werden können. Der integrierte Agent Catalog dient zur Verwaltung und Organisation der Agenten-Workforce.": "A central governance layer prevents uncontrolled 'Agent Sprawl'. It ensures that all agents can be consistently developed, released, and operated according to defined standards. The integrated Agent Catalog serves to manage and organize the agent workforce.",
      "Der AI Gateway ermöglicht die dynamische Auswahl des optimalen KI-Modells für jede spezifische Aufgabe. Er routet Anfragen intelligent zu passenden Modellen, von schnellen Modellen für Routineaufgaben bis zu spezialisierten Modellen für komplexe Analysen. Dies sichert maximale Flexibilität bei der Modellnutzung.": "The AI Gateway enables dynamic selection of the optimal AI model for each specific task. It intelligently routes requests to suitable models, from fast models for routine tasks to specialized models for complex analyses. This ensures maximum flexibility in model usage.",
      "Das System bietet tiefe Einblicke in KI-Prozesse durch umfassende Observability-Funktionen. Lückenlose Audit-Logs und End-to-End-Tracing ermöglichen die vollständige Nachvollziehbarkeit und Erklärbarkeit jeder einzelnen Agentenentscheidung, was Transparenz und Vertrauen schafft.": "The system provides deep insights into AI processes through comprehensive observability functions. Seamless audit logs and end-to-end tracing enable complete traceability and explainability of every individual agent decision, creating transparency and trust.",
      "Die Agent Runtime unterstützt den Betrieb von KI-Agenten, die mit verschiedenen Technologien und Frameworks entwickelt wurden. Dies reduziert die Einarbeitungszeit und ermöglicht Teams, sofort mit vertrauten Werkzeugen produktiv zu sein, wodurch die Entwicklungszeit signifikant verkürzt wird.": "The Agent Runtime supports the operation of AI agents developed with various technologies and frameworks. This reduces onboarding time and enables teams to be immediately productive with familiar tools, significantly shortening development time.",
      "Eine integrierte Testumgebung ermöglicht die systematische Validierung von Agenten vor dem produktiven Einsatz. Die Testbench unterstützt standardisierte Tests für das Verhalten, die Performance und die Sicherheit der Agenten, um deren Qualität und Zuverlässigkeit sicherzustellen.": "An integrated test environment enables systematic validation of agents before productive deployment. The testbench supports standardized tests for agent behavior, performance, and security to ensure their quality and reliability.",
      "Das System basiert auf einer offenen Architektur und verpflichtet sich zu Industriestandards wie A2A (Agent-to-Agent Communication) und MCP (Multi-Agent Communication Protocol). Dies schützt vor Vendor-Lock-in und gewährleistet eine zukunftssichere, flexible und erweiterbare Infrastruktur.": "The system is based on an open architecture and commits to industry standards such as A2A (Agent-to-Agent Communication) and MCP (Multi-Agent Communication Protocol). This protects against vendor lock-in and ensures a future-proof, flexible, and extensible infrastructure."
    };
    return descriptions[text] || text;
  };

  return (
    <section id="architecture" className="py-20 section-padding bg-black text-white">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('architecture.title')}
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('architecture.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6" ref={leftColumnRef}>
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              {t('architecture.blueprint.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed md:text-center lg:text-left">
              {t('architecture.blueprint.description')}
            </p>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/architecture-sketch-3.png" 
                  alt="Agentic Layer System-Architektur mit Controls (Agent Testbench, Agent Observability, Agent Catalog), Agentic Workforce (Agents & Connectors) und Spacers (Agent Runtime, AI Gateway, Agent Gateway)"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6" ref={rightColumnRef}>
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              {t('architecture.features.title')}
            </h3>

            <Accordion type="multiple" className="space-y-3">
              {featuresData.map((feature, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <Card className="border-2 hover:border-primary/20 transition-colors">
                    <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left hover:no-underline text-foreground">
                      <span className="font-medium">{getFeatureText(feature.titleKey)}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {getFeatureDescription(feature.descriptionKey)}
                      </p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
