
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
          target?: HTMLElement | string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
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
  const formCreatedRef = useRef(false);
  const [formStatus, setFormStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Prevent creating multiple forms
    if (formCreatedRef.current) {
      return;
    }
    
    // Clear any existing forms
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="js-eu1.hsforms.net"]');
    
    const createForm = () => {
      if (window.hbspt && formRef.current && !formCreatedRef.current) {
        console.log('Creating HubSpot form...', formRef.current);
        formCreatedRef.current = true;
        
        // Set a unique ID for better targeting
        const formId = 'hubspot-form-' + Date.now();
        formRef.current.id = formId;
        
        try {
          window.hbspt.forms.create({
            portalId: "144685037",
            formId: "44da64ea-4f9c-4474-a43d-9295a414e89d",
            region: "eu1",
            target: `#${formId}`,
            onFormReady: () => {
              console.log('HubSpot form ready');
              setFormStatus('loaded');
              
              // Ensure the form stays inside its container
              const formElement = document.querySelector(`#${formId} .hbspt-form`);
              if (formElement) {
                (formElement as HTMLElement).style.position = 'relative';
                (formElement as HTMLElement).style.zIndex = '1';
                (formElement as HTMLElement).style.maxWidth = '100%';
                (formElement as HTMLElement).style.overflow = 'hidden';
              }
            },
            onFormSubmit: () => {
              console.log('HubSpot form submitted');
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          formCreatedRef.current = false;
          setFormStatus('error');
        }
      } else if (!window.hbspt || !formRef.current) {
        console.warn('HubSpot script not ready or form container not found', {
          hbspt: !!window.hbspt,
          formRef: !!formRef.current
        });
        setFormStatus('error');
      }
    };

    if (existingScript && window.hbspt) {
      // Script already loaded
      createForm();
    } else {
      // Load HubSpot script
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('HubSpot script loaded');
        // Wait a bit for the script to initialize
        setTimeout(createForm, 500);
      };
      
      script.onerror = () => {
        console.error('Failed to load HubSpot script');
        setFormStatus('error');
      };
      
      document.head.appendChild(script);
    }

    // Set a timeout to show error if form doesn't load
    timeoutId = setTimeout(() => {
      if (formStatus === 'loading') {
        console.warn('HubSpot form loading timeout');
        setFormStatus('error');
      }
    }, 15000);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Clear form container on cleanup
      if (formRef.current) {
        formRef.current.innerHTML = '';
        formRef.current.id = '';
      }
      formCreatedRef.current = false;
    };
  }, []); // Remove formStatus dependency to prevent re-runs

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('cta.title')}
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('cta.subtitle').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t('cta.subtitle').split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {t('cta.description').split('\n\n').map((paragraph, index) => {
              const germanText = '„Architektur und Aufbau einer Cloud-nativen AI-Plattform"';
              const englishText = '"Architecture and Construction of a Cloud-native AI Platform"';
              
              const hasGermanText = paragraph.includes('Architektur und Aufbau einer Cloud-nativen AI-Plattform');
              const hasEnglishText = paragraph.includes('Architecture and Construction of a Cloud-native AI Platform');
              
              return (
                <span key={index}>
                  {hasGermanText ? (
                    <>
                      {paragraph.split(germanText).map((part, partIndex) => (
                        <span key={partIndex}>
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
                        </span>
                      ))}
                    </>
                  ) : hasEnglishText ? (
                    <>
                      {paragraph.split(englishText).map((part, partIndex) => (
                        <span key={partIndex}>
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
                        </span>
                      ))}
                    </>
                  ) : (
                    paragraph
                  )}
                  {index < t('cta.description').split('\n\n').length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
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
            <CardContent className="relative">
              <div 
                ref={formRef} 
                className="hubspot-form-container"
                style={{ 
                  minHeight: '200px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              />
              {formStatus === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <span className="ml-2 text-sm text-muted-foreground">Newsletter-Formular wird geladen...</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Das Formular konnte nicht geladen werden. Bitte kontaktieren Sie uns direkt:
                  </p>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
