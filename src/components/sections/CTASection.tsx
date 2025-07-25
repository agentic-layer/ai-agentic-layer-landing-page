
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ delay: 200 });
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Sie erhalten Updates zu unseren wichtigsten Meilensteinen."
    });
    setEmail('');
  };

  const handleEmailClick = () => {
    const emailAddress = 'agenticlayer@qaware.de';
    const subject = 'Hello Agentic Layer';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoUrl, '_self');
  };

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
              <CardTitle className="text-lg font-medium">{t('cta.card.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <img src="/lovable-uploads/177aaf0a-da67-4298-a8d4-3ce33d908677.png" alt="Team member" className="w-full object-contain rounded-lg" />
                </div>
                <div className="flex items-start">
                  <p className="text-base text-muted-foreground">
                    {t('cta.card.description').split('\n\n').map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        {index < t('cta.card.description').split('\n\n').length - 1 && <><br /><br /></>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <Button onClick={handleEmailClick} className="w-full mt-6">{t('cta.card.button')}</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
