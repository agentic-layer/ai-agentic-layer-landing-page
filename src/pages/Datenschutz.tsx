
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const Datenschutz = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
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
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.definitions.title')}</h2>
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
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.cookies.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.cookies.intro')}</p>
                    <p>{t('datenschutz.cookies.explanation')}</p>
                    <p>{t('datenschutz.cookies.usage')}</p>
                    <p>{t('datenschutz.cookies.optimization')}</p>
                    <p>{t('datenschutz.cookies.control')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.general_data.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.general_data.collection')}</p>
                    <p>{t('datenschutz.general_data.usage')}</p>
                    <p>{t('datenschutz.general_data.analysis')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.deletion.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('datenschutz.deletion.routine')}</p>
                    <p>{t('datenschutz.deletion.conditions')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.rights.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.confirmation.title')}</p>
                      <p>{t('datenschutz.rights.confirmation.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.information.title')}</p>
                      <p>{t('datenschutz.rights.information.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.correction.title')}</p>
                      <p>{t('datenschutz.rights.correction.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.deletion.title')}</p>
                      <p>{t('datenschutz.rights.deletion.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.restriction.title')}</p>
                      <p>{t('datenschutz.rights.restriction.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.portability.title')}</p>
                      <p>{t('datenschutz.rights.portability.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.objection.title')}</p>
                      <p>{t('datenschutz.rights.objection.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.automated_decisions.title')}</p>
                      <p>{t('datenschutz.rights.automated_decisions.content')}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{t('datenschutz.rights.withdrawal.title')}</p>
                      <p>{t('datenschutz.rights.withdrawal.content')}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.applications.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.applications.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.legal_basis.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.legal_basis.content')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('datenschutz.legitimate_interests.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('datenschutz.legitimate_interests.content')}</p>
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
            <img 
              src="/lovable-uploads/0a7583d8-da06-4025-83a4-f818b759b82e.png" 
              alt="Powered by QAware" 
              className="mx-auto mb-8 opacity-70 w-[240px]"
            />
            <div className="flex justify-center space-x-6 mb-8">
              <Link 
                to="/impressum" 
                className="text-sm hover:text-primary transition-colors no-underline"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-sm hover:text-primary transition-colors no-underline"
              >
                Datenschutz
              </Link>
            </div>
            <p className="text-sm">
              © 2025 Agentic Layer.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Datenschutz;
