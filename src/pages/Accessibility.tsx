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

  const content = {
    de: {
      title: 'Barrierefreiheitserklärung',
      intro: 'Diese Barrierefreiheitserklärung gilt für die Website www.agentic-layer.de, die von QAware GmbH betrieben wird.',
      commitment: 'Unser Engagement für Barrierefreiheit',
      commitmentText: 'Agentic Layer ist bestrebt, seine Website für alle Menschen zugänglich zu machen, unabhängig von Fähigkeiten oder Technologien. Wir befolgen die Web Content Accessibility Guidelines (WCAG) 2.1 Level AA sowie die Anforderungen der European Accessibility Act (EAA).',
      compliance: 'Compliance-Status',
      complianceText: 'Diese Website entspricht den Anforderungen der European Accessibility Act (EAA) und den WCAG 2.1 Level AA Standards. Die Website wurde gemäß den geltenden Bestimmungen für digitale Barrierefreiheit entwickelt und wird regelmäßig überprüft.',
      features: 'Barrierefreiheitsmerkmale',
      featuresText: [
        'Sprunglinks für Tastaturnavigation zur Hauptnavigation und zum Hauptinhalt',
        'Alternative Texte für alle Bilder und grafischen Inhalte',
        'Angemessene Farbkontraste (mindestens 4.5:1 für normalen Text)',
        'Vollständige Tastaturnavigation ohne Mausbenutzung',
        'Bildschirmleser-kompatible Struktur mit semantischen HTML-Elementen',
        'ARIA-Attribute für erweiterte Zugänglichkeit und bessere Screenreader-Unterstützung',
        'Mehrsprachige Unterstützung (Deutsch/Englisch) mit korrekten lang-Attributen',
        'Fokusindikatoren für alle interaktiven Elemente',
        'Konsistente Navigation und Seitenstruktur',
        'Berücksichtigung von Bewegungspräferenzen (prefers-reduced-motion)'
      ],
      testing: 'Prüfung der Barrierefreiheit',
      testingText: 'Die Barrierefreiheit dieser Website wird regelmäßig mit verschiedenen Methoden überprüft:',
      testingMethods: [
        'Automatisierte Tests mit Accessibility-Scanning-Tools',
        'Manuelle Prüfung durch Experten für digitale Barrierefreiheit',
        'Tests mit Screenreadern (NVDA, JAWS, VoiceOver)',
        'Tastaturnavigation ohne Mausbenutzung',
        'Überprüfung der Farbkontraste und visuellen Darstellung',
        'Prüfung der Kompatibilität mit assistiven Technologien'
      ],
      feedback: 'Feedback zur Barrierefreiheit',
      feedbackText: 'Wenn Sie Probleme mit der Barrierefreiheit auf dieser Website haben oder Verbesserungsvorschläge machen möchten, kontaktieren Sie uns bitte. Wir nehmen alle Rückmeldungen ernst und arbeiten kontinuierlich an der Verbesserung der Zugänglichkeit.',
      contact: 'Kontakt für Barrierefreiheit',
      contactInfo: {
        company: 'QAware GmbH',
        address: 'Aschauer Str. 30, 81549 München',
        email: 'accessibility@agentic-layer.de',
        phone: 'Telefon: +49 89 232315-0',
        response: 'Wir werden uns innerhalb von 5 Werktagen bei Ihnen melden.'
      },
      lastUpdated: 'Zuletzt aktualisiert: 23. Juli 2025'
    },
    en: {
      title: 'Accessibility Statement',
      intro: 'This accessibility statement applies to the website www.agentic-layer.de, which is operated by QAware GmbH.',
      commitment: 'Our Commitment to Accessibility',
      commitmentText: 'Agentic Layer is committed to making its website accessible to all people, regardless of abilities or technologies. We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the requirements of the European Accessibility Act (EAA).',
      compliance: 'Compliance Status',
      complianceText: 'This website complies with the European Accessibility Act (EAA) requirements and WCAG 2.1 Level AA standards. The website has been developed according to current digital accessibility regulations and is regularly reviewed.',
      features: 'Accessibility Features',
      featuresText: [
        'Skip links for keyboard navigation to main navigation and main content',
        'Alternative text for all images and graphical content',
        'Appropriate color contrasts (minimum 4.5:1 for normal text)',
        'Complete keyboard navigation without mouse usage',
        'Screen reader compatible structure with semantic HTML elements',
        'ARIA attributes for enhanced accessibility and better screenreader support',
        'Multi-language support (German/English) with correct lang attributes',
        'Focus indicators for all interactive elements',
        'Consistent navigation and page structure',
        'Consideration of motion preferences (prefers-reduced-motion)'
      ],
      testing: 'Accessibility Testing',
      testingText: 'The accessibility of this website is regularly tested using various methods:',
      testingMethods: [
        'Automated testing with accessibility scanning tools',
        'Manual review by digital accessibility experts',
        'Testing with screen readers (NVDA, JAWS, VoiceOver)',
        'Keyboard navigation without mouse usage',
        'Color contrast and visual presentation verification',
        'Compatibility testing with assistive technologies'
      ],
      feedback: 'Accessibility Feedback',
      feedbackText: 'If you experience any accessibility issues on this website or would like to suggest improvements, please contact us. We take all feedback seriously and work continuously to improve accessibility.',
      contact: 'Accessibility Contact',
      contactInfo: {
        company: 'QAware GmbH',
        address: 'Aschauer Str. 30, 81549 München',
        email: 'accessibility@agentic-layer.de',
        phone: 'Phone: +49 89 232315-0',
        response: 'We will respond to you within 5 business days.'
      },
      lastUpdated: 'Last updated: July 23, 2025'
    }
  };

  const t = content[language];

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="pt-24 pb-16 section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <h1 className="headline-text mb-16 text-left">{t.title}</h1>
              
              <div className="space-y-8 text-left">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>{t.intro}</p>
                </div>
                
                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">1. {t.commitment}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t.commitmentText}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">2. {t.compliance}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p>{t.complianceText}</p>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">3. {t.features}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-3">
                    <p>Diese Website implementiert die folgenden Barrierefreiheitsmerkmale:</p>
                    <ul className="space-y-2">
                      {t.featuresText.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">4. {t.testing}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-3">
                    <p>{t.testingText}</p>
                    <ul className="space-y-2">
                      {t.testingMethods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="subheadline-text mb-4 text-foreground text-left">5. {t.feedback}</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>{t.feedbackText}</p>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t.contact}</h3>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">{t.contactInfo.company}</p>
                        <p>{t.contactInfo.address}</p>
                        <p>E-Mail: {t.contactInfo.email}</p>
                        <p>{t.contactInfo.phone}</p>
                        <p className="mt-4">{t.contactInfo.response}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {t.lastUpdated}
                  </p>
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