
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
          <div className="container-width">
            <div className="flex justify-between items-center mb-8">
              <img 
                src="/lovable-uploads/cd0e88ce-c4e8-4412-acc2-42cbb367df70.png" 
                alt="Powered by QAware" 
                className="opacity-70"
              />
              <Link 
                to="/impressum" 
                className="text-sm hover:text-primary transition-colors underline text-muted-foreground"
              >
                Impressum
              </Link>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              © 2025 Agentic Layer. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
