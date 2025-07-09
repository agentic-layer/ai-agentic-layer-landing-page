
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { BusinessBenefitsSection } from '@/components/sections/BusinessBenefitsSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection';

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
        <LeadMagnetSection />
        
        <OpenSourceSection />
        <CTASection />
        
        {/* Footer */}
        <footer className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <p className="text-sm">
              © 2024 Agentic Layer. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
