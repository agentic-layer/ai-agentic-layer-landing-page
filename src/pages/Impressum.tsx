
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';

const Impressum = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="pt-24 pb-16 section-padding">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="headline-text mb-16">Impressum</h1>
              
              <div className="space-y-12 text-left max-w-2xl mx-auto">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">QAware GmbH</h2>
                  <div className="subheadline-text space-y-1">
                    <p>Aschauer Straße 30</p>
                    <p>81549 München</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div>
                  <div className="subheadline-text space-y-1">
                    <p>+49 89 232315-0</p>
                    <p>info@qaware.de</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Geschäftsführer</h2>
                  <div className="subheadline-text space-y-1">
                    <p>Dr. Josef Adersberger</p>
                    <p>Mario-Leander Reimer</p>
                    <p>Michael Rohleder</p>
                    <p>Michael Stehnken</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Handelsregister</h2>
                  <div className="subheadline-text space-y-1">
                    <p>Registergericht: München</p>
                    <p>Registernummer: HRB 163761</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Umsatzsteueridentifikations-Nummer gemäss § 27 A Umsatzsteuergesetz</h2>
                  <div className="subheadline-text">
                    <p>DE250622388</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Inhaltlich verantwortlicher gemäss § 6 MDSTV</h2>
                  <div className="subheadline-text">
                    <p>Dr. Josef Adersberger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <p className="text-sm mb-2">
              © 2024 Agentic Layer. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Impressum;
