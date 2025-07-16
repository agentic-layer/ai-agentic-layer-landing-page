
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { BusinessBenefitsSection } from '@/components/sections/BusinessBenefitsSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { OpenSourceSection } from '@/components/sections/OpenSourceSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <HeroSection />
        <BusinessBenefitsSection />
        <ArchitectureSection />
        
        <OpenSourceSection />
        <CTASection />
        
        {/* Footer */}
        <footer className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <img 
              src="/lovable-uploads/dd4f6505-b747-428c-b7c0-e88ce9603481.png" 
              alt="Powered by QAware" 
              className="mx-auto mb-8 opacity-70"
            />
            <Link 
              to="/impressum" 
              className="text-sm hover:text-primary transition-colors block mb-8"
            >
              Impressum
            </Link>
            <p className="text-sm">
              © 2025 Agentic Layer.<br />Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
