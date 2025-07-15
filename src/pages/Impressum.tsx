
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ArrowLeft } from 'lucide-react';

const Impressum = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <div className="container-width section-padding py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-foreground font-semibold mb-2">QAware GmbH</h2>
                <p>Aschauer Straße 30</p>
                <p>81549 München</p>
                <p>Deutschland</p>
              </div>
              
              <div>
                <p>+49 89 232315-0</p>
                <p>info@qaware.de</p>
              </div>
              
              <div>
                <h2 className="text-foreground font-semibold mb-2">Geschäftsführer</h2>
                <p>Dr. Josef Adersberger</p>
                <p>Mario-Leander Reimer</p>
                <p>Michael Rohleder</p>
                <p>Michael Stehnken</p>
              </div>
              
              <div>
                <h2 className="text-foreground font-semibold mb-2">Handelsregister</h2>
                <p>Registergericht: München</p>
                <p>Registernummer: HRB 163761</p>
              </div>
              
              <div>
                <h2 className="text-foreground font-semibold mb-2">Umsatzsteueridentifikations-Nummer gemäss § 27 A Umsatzsteuergesetz</h2>
                <p>DE250622388</p>
              </div>
              
              <div>
                <h2 className="text-foreground font-semibold mb-2">Inhaltlich verantwortlicher gemäss § 6 MDSTV</h2>
                <p>Dr. Josef Adersberger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Impressum;
