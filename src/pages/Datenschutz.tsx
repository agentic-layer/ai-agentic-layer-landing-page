import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const Datenschutz = () => {
  const {
    t
  } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="pt-24 pb-16 section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <h1 className="headline-text mb-16 text-left">{t('datenschutz.title')}</h1>
              
              <div className="space-y-8 text-left">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>{t('datenschutz.intro')}</p>
                </div>
                
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>{t('datenschutz.processing')}</p>
                </div>
                
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>{t('datenschutz.security')}</p>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">1. {t('datenschutz.definitions.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.definitions.intro')}</p>
                    <p>{t('datenschutz.definitions.purpose')}</p>
                    <p>{t('datenschutz.definitions.usage')}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.personal_data.title')}</p>
                        <p>{t('datenschutz.definitions.personal_data.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.data_subject.title')}</p>
                        <p>{t('datenschutz.definitions.data_subject.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.processing.title')}</p>
                        <p>{t('datenschutz.definitions.processing.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.restriction.title')}</p>
                        <p>{t('datenschutz.definitions.restriction.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.profiling.title')}</p>
                        <p>{t('datenschutz.definitions.profiling.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.pseudonymization.title')}</p>
                        <p>{t('datenschutz.definitions.pseudonymization.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.controller.title')}</p>
                        <p>{t('datenschutz.definitions.controller.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.processor.title')}</p>
                        <p>{t('datenschutz.definitions.processor.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.recipient.title')}</p>
                        <p>{t('datenschutz.definitions.recipient.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.third_party.title')}</p>
                        <p>{t('datenschutz.definitions.third_party.content')}</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{t('datenschutz.definitions.consent.title')}</p>
                        <p>{t('datenschutz.definitions.consent.content')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.controller_info.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>{t('datenschutz.controller_info.intro')}</p>
                    <p className="font-semibold text-foreground">QAware GmbH</p>
                    <p>Aschauer Str. 30</p>
                    <p>81549 München</p>
                    <p>Germany</p>
                    <p>Tel.: +49 89 232315-0</p>
                    <p>E-Mail: info@qaware.de</p>
                    <p>Website: www.qaware.de</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.dpo_info.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>{t('datenschutz.dpo_info.intro')}</p>
                    <p className="font-semibold text-foreground">Prof. Dr. Reiner Hüttl</p>
                    <p>IT Berater</p>
                    <p>Palnkamer Str. 44</p>
                    <p>83624 Otterfing</p>
                    <p>Deutschland</p>
                    <p>Tel.: +49 89 232315-0</p>
                    <p>E-Mail: reiner.huettl@qaware.de</p>
                    <p>Website: www.fh-rosenheim.de</p>
                    <p className="mt-4">{t('datenschutz.dpo_info.contact')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.hosting.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.hosting.intro')}</p>
                    <p>{t('datenschutz.hosting.data')}</p>
                    <p>{t('datenschutz.hosting.purpose')}</p>
                    <p>{t('datenschutz.hosting.tracking')}</p>
                    <p>{t('datenschutz.hosting.provider_intro')}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">GitHub Inc.</p>
                      <p>88 Colin P Kelly Jr St</p>
                      <p>San Francisco, CA 94107</p>
                      <p>United States</p>
                    </div>
                    <p>{t('datenschutz.hosting.recipient')}</p>
                    <p>{t('datenschutz.hosting.github_info')}</p>
                    <p>{t('datenschutz.hosting.objection')}</p>
                    <p>{t('datenschutz.hosting.deletion')}</p>
                    <p>{t('datenschutz.hosting.legal_basis')}</p>
                    <p>{t('datenschutz.hosting.compliance')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.cookies.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.cookies.intro')}</p>
                    <p>{t('datenschutz.cookies.definition')}</p>
                    
                    <p>{t('datenschutz.cookies.types.title')}</p>
                    <p>{t('datenschutz.cookies.types.necessary')}</p>
                    <p>{t('datenschutz.cookies.types.optional')}</p>
                    
                    <p>{t('datenschutz.cookies.legal_basis.title')}</p>
                    <p>{t('datenschutz.cookies.legal_basis.necessary')}</p>
                    <p>{t('datenschutz.cookies.legal_basis.optional')}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{t('datenschutz.cookies.borlabs.title')}</h3>
                      <p>{t('datenschutz.cookies.borlabs.intro')}</p>
                      <p>{t('datenschutz.cookies.borlabs.function')}</p>
                      <p>{t('datenschutz.cookies.borlabs.legal')}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{t('datenschutz.cookies.services.title')}</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{t('datenschutz.cookies.google.title')}</h4>
                        <p>{t('datenschutz.cookies.google.description')}</p>
                        <p>{t('datenschutz.cookies.google.legal')}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{t('datenschutz.cookies.hubspot.title')}</h4>
                        <p>{t('datenschutz.cookies.hubspot.description')}</p>
                        <p>{t('datenschutz.cookies.hubspot.legal')}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{t('datenschutz.cookies.social.title')}</h3>
                      <p>{t('datenschutz.cookies.social.description')}</p>
                      <p>{t('datenschutz.cookies.github')}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.google_analytics.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p className="whitespace-pre-line">{t('datenschutz.google_analytics.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.newsletter.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p className="whitespace-pre-line">{t('datenschutz.newsletter.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.general_data.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                     <p>{t('datenschutz.general_data.collection')}</p>
                     <p>{t('datenschutz.general_data.technical_requirement')}</p>
                     <p>{t('datenschutz.general_data.legal_basis')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.rights.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p className="whitespace-pre-line">{t('datenschutz.rights.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.legal_basis.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.legal_basis.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.storage_duration.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.storage_duration.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.data_provision.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.data_provision.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.automated_decisions.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.automated_decisions.content')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <img src="/lovable-uploads/0a7583d8-da06-4025-83a4-f818b759b82e.png" alt="Powered by QAware" className="mx-auto mb-8 opacity-70 w-[240px]" />
            <div className="flex justify-center space-x-6 mb-8">
              <Link to="/impressum" className="text-sm hover:text-primary transition-colors no-underline">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm hover:text-primary transition-colors no-underline">
                Datenschutz
              </Link>
              <Link to="/accessibility" className="text-sm hover:text-primary transition-colors no-underline">
                Barrierefreiheit
              </Link>
            </div>
            <p className="text-sm">
              © 2025 Agentic Layer.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>;
};

export default Datenschutz;
