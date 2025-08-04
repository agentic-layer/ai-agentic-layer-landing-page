
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetUrl } from '../utils/assetHelper';

const Impressum = () => {
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
              <h1 className="headline-text mb-16 text-left">{t('impressum.title')}</h1>
              
              <div className="space-y-8 text-left">
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('impressum.company.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p className="font-semibold text-foreground">{t('impressum.company.name')}</p>
                    <p>{t('impressum.company.address')}</p>
                    <p>{t('impressum.company.city')}</p>
                    <p>{t('impressum.company.country')}</p>
                    <p>{t('impressum.company.phone')}</p>
                    <p>{t('impressum.company.email')}</p>
                    <p>{t('impressum.company.website')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('impressum.management.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('impressum.management.directors')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('impressum.register.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>{t('impressum.register.court')}</p>
                    <p>{t('impressum.register.number')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('impressum.vat.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t('impressum.vat.number')}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">{t('impressum.content.title')}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p className="font-semibold text-foreground">{t('impressum.content.person')}</p>
                    <p>{t('impressum.content.address')}</p>
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

export default Impressum;
