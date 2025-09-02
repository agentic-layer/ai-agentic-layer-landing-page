
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

// Declare HubSpot global
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target?: HTMLElement;
        }) => void;
      };
    };
  }
}

export function CTASection() {
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ delay: 200 });
  const { t } = useLanguage();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot script
    const script1 = document.createElement('script');
    script1.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script1.charset = 'utf-8';
    script1.type = 'text/javascript';
    
    script1.onload = () => {
      // Create HubSpot form after script loads
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: "144685037",
          formId: "44da64ea-4f9c-4474-a43d-9295a414e89d",
          region: "eu1",
          target: formRef.current
        });
      }
    };
    
    document.head.appendChild(script1);
    
    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('cta.title')}
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('cta.subtitle').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('cta.subtitle').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {t('cta.description').split('\n\n').map((paragraph, index) => {
              const germanText = '„Architektur und Aufbau einer Cloud-nativen AI-Plattform"';
              const englishText = '"Architecture and Construction of a Cloud-native AI Platform"';
              
              const hasGermanText = paragraph.includes('Architektur und Aufbau einer Cloud-nativen AI-Plattform');
              const hasEnglishText = paragraph.includes('Architecture and Construction of a Cloud-native AI Platform');
              
              return (
                <React.Fragment key={index}>
                  {hasGermanText ? (
                    <>
                      {paragraph.split(germanText).map((part, partIndex) => (
                        <React.Fragment key={partIndex}>
                          {part}
                          {partIndex === 0 && (
                            <>
                              {germanText}
                              <a 
                                href="https://clc-conference.eu/veranstaltung-84098-0-architektur-und-aufbau-einer-cloud-nativen-ai-plattform.html" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline text-primary hover:text-primary/80 transition-colors"
                                aria-label="Workshop Details öffnen"
                              >
                                <ExternalLink className="w-4 h-4 inline" />
                              </a>
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  ) : hasEnglishText ? (
                    <>
                      {paragraph.split(englishText).map((part, partIndex) => (
                        <React.Fragment key={partIndex}>
                          {part}
                          {partIndex === 0 && (
                            <>
                              {englishText}
                              <a 
                                href="https://clc-conference.eu/veranstaltung-84098-0-architektur-und-aufbau-einer-cloud-nativen-ai-plattform.html" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline text-primary hover:text-primary/80 transition-colors"
                                aria-label="Open workshop details"
                              >
                                <ExternalLink className="w-4 h-4 inline" />
                              </a>
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    paragraph
                  )}
                  {index < t('cta.description').split('\n\n').length - 1 && <><br /><br /></>}
                </React.Fragment>
              );
            })}
          </p>
        </div>

        <div className="flex justify-center" ref={cardRef}>
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col max-w-md w-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">Newsletter Anmeldung</CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={formRef} className="hubspot-form" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
