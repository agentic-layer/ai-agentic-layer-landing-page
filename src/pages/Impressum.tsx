
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';

const Impressum = () => {
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
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="headline-text mb-16">Impressum</h1>
              
              <div className="space-y-12 text-center max-w-2xl mx-auto">
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground">QAware GmbH</h2>
                  <div className="text-lg text-muted-foreground space-y-1">
                    <p>Aschauer Straße 30</p>
                    <p>81549 München</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div>
                  <div className="text-lg text-muted-foreground space-y-1">
                    <p>+49 89 232315-0</p>
                    <p>info@qaware.de</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground">Geschäftsführer</h2>
                  <div className="text-lg text-muted-foreground space-y-1">
                    <p>Dr. Josef Adersberger</p>
                    <p>Mario-Leander Reimer</p>
                    <p>Michael Rohleder</p>
                    <p>Michael Stehnken</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground">Handelsregister</h2>
                  <div className="text-lg text-muted-foreground space-y-1">
                    <p>Registergericht: München</p>
                    <p>Registernummer: HRB 163761</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground">Umsatzsteueridentifikations-Nummer gemäss § 27 A Umsatzsteuergesetz</h2>
                  <div className="text-lg text-muted-foreground">
                    <p>DE250622388</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground">Inhaltlich verantwortlicher gemäss § 6 MDSTV</h2>
                  <div className="text-lg text-muted-foreground">
                    <p>Dr. Josef Adersberger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 section-padding border-t border-border">
          <div className="container-width">
            <div className="flex justify-between items-center mb-4">
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

export default Impressum;
