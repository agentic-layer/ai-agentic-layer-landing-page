
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HeroSection } from '@/components/sections/HeroSection';
import { BusinessBenefitsSection } from '@/components/sections/BusinessBenefitsSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection';
import { SpecializedAgentsSection } from '@/components/sections/SpecializedAgentsSection';
import { OpenSourceSection } from '@/components/sections/OpenSourceSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        
        <HeroSection />
        <BusinessBenefitsSection />
        <ArchitectureSection />
        <LeadMagnetSection />
        <SpecializedAgentsSection />
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
