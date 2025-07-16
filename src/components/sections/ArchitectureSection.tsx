import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';


export function ArchitectureSection() {
  const headerRef = useScrollReveal();
  const leftColumnRef = useScrollReveal({ delay: 200 });
  const rightColumnRef = useScrollReveal({ delay: 400 });
  const { t } = useTranslation('architecture');

  return (
    <section id="architecture" className="py-20 section-padding bg-black text-white">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('title')}
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Architecture */}
          <div className="space-y-6" ref={leftColumnRef}>
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              {t('blueprint.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed md:text-center lg:text-left">
              {t('blueprint.description')}
            </p>

            {/* Architecture Diagram */}
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="aspect-[3/4] flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/188f8005-7ac4-4bd6-ac4b-918181447250.png" 
                  alt="Agentic Layer System-Architektur mit Spacers (Agent Runtime, Model Router, Agent Exposition), Agentic Workforce (Agents & Connectors) und Controls (Agent Testbench, Agent Observability, Agent Catalog)"
                  className="w-full h-full object-contain rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6" ref={rightColumnRef}>
            <h3 className="text-2xl font-medium md:text-center lg:text-left">
              {t('features.title')}
            </h3>

            <Accordion type="multiple" className="space-y-3">
              {Object.values(t('features.items', { returnObjects: true }) as Record<string, { title: string; description: string }>).map((feature, index) => (
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
    </section>
  );
}
