
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { BusinessBenefitsSection } from '@/components/sections/BusinessBenefitsSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { OpenSourceSection } from '@/components/sections/OpenSourceSection';
import { CTASection } from '@/components/sections/CTASection';

function IndexContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <HeroSection />
      <BusinessBenefitsSection />
      <ArchitectureSection />
      
      <OpenSourceSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-12 section-padding border-t border-border">
        <div className="container-width">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/lovable-uploads/dd4f6505-b747-428c-b7c0-e88ce9603481.png" 
              alt="Powered by QAware" 
              className="opacity-70"
            />
            <Link 
              to="/impressum" 
              className="text-sm hover:text-primary transition-colors no-underline text-muted-foreground"
            >
              {t('nav.impressum')}
            </Link>
          </div>
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <IndexContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
