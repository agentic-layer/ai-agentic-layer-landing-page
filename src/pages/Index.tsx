
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
            <div className="flex items-center justify-between text-muted-foreground">
              <img 
                src="/lovable-uploads/d6e4c6af-3f6a-44ae-9f8f-d89bc8483803.png" 
                alt="Powered by QAware" 
                className="opacity-70"
              />
              <p className="text-sm">
                © 2025 Agentic Layer.
              </p>
              <Link 
                to="/impressum" 
                className="text-sm hover:text-primary transition-colors no-underline"
              >
                Impressum
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
