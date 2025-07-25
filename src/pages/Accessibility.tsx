import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
  const { language } = useLanguage();

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
            <div className="max-w-4xl mx-auto">
              <h1 className="headline-text mb-16 text-left">Barrierefreiheitserklärung</h1>
              
              <div className="space-y-8 text-left">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>Die QAware GmbH verpflichtet sich, ihre Webseite für alle Menschen zugänglich zu machen, einschließlich Personen mit Behinderungen. Wir arbeiten kontinuierlich daran, die Barrierefreiheit und Benutzerfreundlichkeit unserer Webseite zu verbessern und halten uns an die entsprechenden Standards für Barrierefreiheit.</p>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Standards für Barrierefreiheit</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>Diese Webseite ist darauf ausgelegt, den Web Content Accessibility Guidelines (WCAG) 2.1 auf Level AA zu entsprechen, wie sie vom World Wide Web Consortium (W3C) definiert wurden. Diese Richtlinien erläutern, wie man Webinhalte für Menschen mit einer breiten Palette von Behinderungen zugänglicher macht.</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Erfüllungsgrad</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>Wir haben die folgenden Barrierefreiheitsmerkmale implementiert:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Semantische HTML-Struktur für Screenreader</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Tastaturnavigation für alle interaktiven Elemente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Ausreichende Farbkontraste (mindestens 4.5:1)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Alternative Texte für Bilder</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>ARIA-Labels und Landmarks für bessere Navigation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Skip-Navigation Links</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Fokussierbare Elemente mit sichtbaren Fokusindikatoren</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Sprachauswahl mit Barrierefreiheit</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Bekannte Einschränkungen</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>Trotz unserer Bemühungen können einige Teile der Webseite nicht vollständig barrierefrei sein oder es können temporäre Barrierefreiheitsprobleme auftreten. Wir arbeiten kontinuierlich daran, diese Probleme zu identifizieren und zu beheben.</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Feedback und Kontakt</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>Ihre Rückmeldungen zu Barrierefreiheitsproblemen sind uns wichtig. Wenn Sie auf Barrierefreiheitsprobleme stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Barrierefreiheit-Kontakt</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>E-Mail: agenticlayer@qaware.de</p>
                    <p>Telefon: +49 89 232315-0</p>
                    <p className="mt-4">Postanschrift:</p>
                    <p className="font-semibold text-foreground">QAware GmbH</p>
                    <p>Aschauer Straße 32</p>
                    <p>81549 München</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Durchsetzungsverfahren</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>Falls Sie mit unserer Antwort auf Ihr Barrierefreiheits-Feedback nicht zufrieden sind, können Sie sich an die zuständige Durchsetzungsstelle wenden. In Deutschland ist dies die Schlichtungsstelle nach dem Behindertengleichstellungsgesetz bei der Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen.</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Technische Informationen</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>Diese Webseite wurde mit modernen Webtechnologien entwickelt und nutzt:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>React mit TypeScript für robuste Benutzeroberflächen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Semantic HTML5 für strukturierte Inhalte</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>CSS mit Fokus auf Barrierefreiheit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>ARIA-Standards für erweiterte Screenreader-Unterstützung</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Responsive Design für alle Gerätegrößen</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">Datum dieser Erklärung</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-2">
                    <p>Diese Barrierefreiheitserklärung wurde erstellt am: 22. Juli 2025</p>
                    <p>Letzte Aktualisierung: 22. Juli 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer role="contentinfo" className="py-12 section-padding border-t border-border">
          <div className="container-width text-center text-muted-foreground">
            <img 
              src="/lovable-uploads/0a7583d8-da06-4025-83a4-f818b759b82e.png" 
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

export default Accessibility;