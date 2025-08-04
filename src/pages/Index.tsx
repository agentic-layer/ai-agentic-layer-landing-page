
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { BusinessBenefitsSection } from '@/components/sections/BusinessBenefitsSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { OpenSourceSection } from '@/components/sections/OpenSourceSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAssetUrl } from '../utils/assetHelper';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main id="main-content" role="main" aria-label="Main content">
          <HeroSection />
          <BusinessBenefitsSection />
          <ArchitectureSection />
          <OpenSourceSection />
          <CTASection />
        </main>
        
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

export default Index;
