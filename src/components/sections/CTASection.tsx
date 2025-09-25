import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ delay: 200 });
  const { t } = useLanguage();
  const formRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    console.log('CTASection: Starting HubSpot form setup');
    console.log('CTASection: formRef.current exists:', !!formRef.current);
    
    let timeoutId: NodeJS.Timeout;
    let checkInterval: NodeJS.Timeout;
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://js-eu1.hsforms.net/forms/embed/144685037.js"]');
    console.log('CTASection: Existing script found:', !!existingScript);
    
    // Set the exact HTML structure provided by user FIRST
    if (formRef.current) {
      console.log('CTASection: Setting form HTML structure');
      formRef.current.innerHTML = '<div class="hs-form-frame" data-region="eu1" data-form-id="3488379c-56f4-456f-9e30-4ee4fc7e9018" data-portal-id="144685037"></div>';
      console.log('CTASection: Form HTML set:', formRef.current.innerHTML);
    }
    
    // Function to check if form has loaded
    const checkFormLoaded = () => {
      const formFrame = formRef.current?.querySelector('.hs-form-frame');
      const hsForm = document.querySelector('.hbspt-form');
      const hasFormContent = formFrame && (formFrame.children.length > 0 || formFrame.innerHTML.includes('input'));
      
      console.log('CTASection: Checking form status');
      console.log('CTASection: Form frame found:', !!formFrame);
      console.log('CTASection: HS form found:', !!hsForm);
      console.log('CTASection: Has form content:', !!hasFormContent);
      
      if (hsForm || hasFormContent) {
        console.log('CTASection: Form detected successfully, clearing timeout');
        setFormStatus('loaded');
        if (timeoutId) clearTimeout(timeoutId);
        if (checkInterval) clearInterval(checkInterval);
        return true;
      }
      return false;
    };
    
    if (!existingScript) {
      console.log('CTASection: Creating and loading HubSpot script');
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/144685037.js';
      script.defer = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('CTASection: HubSpot script loaded successfully');
        console.log('CTASection: window.hbspt exists:', typeof (window as any).hbspt);
        
        // Start checking for form content every 500ms
        checkInterval = setInterval(() => {
          if (checkFormLoaded()) {
            clearInterval(checkInterval);
          }
        }, 500);
      };
      
      script.onerror = (error) => {
        console.error('CTASection: Failed to load HubSpot script', error);
        setFormStatus('error');
        if (timeoutId) clearTimeout(timeoutId);
        if (checkInterval) clearInterval(checkInterval);
      };
      
      console.log('CTASection: Appending script to head');
      document.head.appendChild(script);
    } else {
      console.log('CTASection: HubSpot script already exists, checking for form');
      // Start checking immediately if script already exists
      checkInterval = setInterval(() => {
        if (checkFormLoaded()) {
          clearInterval(checkInterval);
        }
      }, 500);
    }

    // Set a timeout to detect loading issues - only set error if form hasn't loaded
    timeoutId = setTimeout(() => {
      if (!checkFormLoaded()) {
        console.warn('CTASection: HubSpot form loading timeout after 15 seconds - form not detected');
        setFormStatus('error');
      } else {
        console.log('CTASection: Form already loaded, ignoring timeout');
      }
      if (checkInterval) clearInterval(checkInterval);
    }, 15000);
    
    return () => {
      console.log('CTASection: Cleanup');
      if (timeoutId) clearTimeout(timeoutId);
      if (checkInterval) clearInterval(checkInterval);
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
              <CardTitle className="text-lg font-medium">{t('newsletter.title')}</CardTitle>
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
                  <span className="ml-2 text-sm text-muted-foreground">{t('newsletter.loading')}</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {t('newsletter.error')}
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