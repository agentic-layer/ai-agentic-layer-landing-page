import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetUrl } from '../utils/assetHelper';

const Accessibility = () => {
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
              <h1 className="headline-text mb-16 text-left">{t('accessibility.title')}</h1>
              
              <div className="space-y-8 text-left">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>{t('accessibility.intro')}</p>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.standards.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('accessibility.standards.content')}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.compliance.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('accessibility.compliance.intro')}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.semantic')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.keyboard')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.contrast')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.alt')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.aria')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.skip')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.focus')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.compliance.language')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.limitations.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('accessibility.limitations.content')}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.feedback.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('accessibility.feedback.content')}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.contact.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>{t('accessibility.contact.email')}</p>
                    <p>{t('accessibility.contact.phone')}</p>
                    <p className="mt-4">{t('accessibility.contact.address')}</p>
                    <p className="font-semibold text-foreground">QAware GmbH</p>
                    <p>Aschauer Straße 32</p>
                    <p>81549 München</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.enforcement.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('accessibility.enforcement.content')}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.technical.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t('accessibility.technical.intro')}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.technical.react')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.technical.html')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.technical.css')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.technical.aria')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{t('accessibility.technical.responsive')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('accessibility.date.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>{t('accessibility.date.created')}</p>
                    <p>{t('accessibility.date.updated')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer role="contentinfo" className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <img 
              src={getAssetUrl('lovable-uploads/0a7583d8-da06-4025-83a4-f818b759b82e.png')} 
              alt="Powered by QAware" 
              className="mx-auto mb-8 opacity-70 w-[240px]"
            />
            <nav aria-label="Footer navigation">
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
                <Link 
                  to="/accessibility" 
                  className="text-sm hover:text-primary transition-colors no-underline"
                >
                  Barrierefreiheit
                </Link>
              </div>
            </nav>
            <p className="text-sm">
              © 2025 Agentic Layer.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Accessibility;