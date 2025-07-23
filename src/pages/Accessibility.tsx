import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Barrierefreiheitserklärung',
      commitment: 'Unser Engagement für Barrierefreiheit',
      commitmentText: 'Agentic Layer ist bestrebt, seine Website für alle Menschen zugänglich zu machen, unabhängig von Fähigkeiten oder Technologien. Wir befolgen die Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.',
      compliance: 'Compliance-Status',
      complianceText: 'Diese Website entspricht den Anforderungen der European Accessibility Act (EAA) und den WCAG 2.1 Level AA Standards.',
      features: 'Barrierefreiheitsmerkmale',
      featuresText: [
        'Sprunglinks für Tastaturnavigation',
        'Alternative Texte für alle Bilder',
        'Angemessene Farbkontraste',
        'Tastaturfreundliche Navigation',
        'Bildschirmleser-kompatible Struktur',
        'Mehrsprachige Unterstützung (Deutsch/Englisch)',
        'Semantische HTML-Struktur',
        'ARIA-Attribute für erweiterte Zugänglichkeit'
      ],
      feedback: 'Feedback zur Barrierefreiheit',
      feedbackText: 'Wenn Sie Probleme mit der Barrierefreiheit auf dieser Website haben, kontaktieren Sie uns bitte:',
      contact: 'Kontakt',
      email: 'E-Mail: accessibility@agentic-layer.de',
      phone: 'Telefon: +49 89 123456789',
      lastUpdated: 'Zuletzt aktualisiert: 23. Juli 2025'
    },
    en: {
      title: 'Accessibility Statement',
      commitment: 'Our Commitment to Accessibility',
      commitmentText: 'Agentic Layer is committed to making its website accessible to all people, regardless of abilities or technologies. We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.',
      compliance: 'Compliance Status',
      complianceText: 'This website complies with the European Accessibility Act (EAA) requirements and WCAG 2.1 Level AA standards.',
      features: 'Accessibility Features',
      featuresText: [
        'Skip links for keyboard navigation',
        'Alternative text for all images',
        'Appropriate color contrasts',
        'Keyboard-friendly navigation',
        'Screen reader compatible structure',
        'Multi-language support (German/English)',
        'Semantic HTML structure',
        'ARIA attributes for enhanced accessibility'
      ],
      feedback: 'Accessibility Feedback',
      feedbackText: 'If you experience any accessibility issues on this website, please contact us:',
      contact: 'Contact',
      email: 'Email: accessibility@agentic-layer.de',
      phone: 'Phone: +49 89 123456789',
      lastUpdated: 'Last updated: July 23, 2025'
    }
  };

  const t = content[language];

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main id="main-content" role="main" className="pt-24 section-padding">
          <div className="container-width max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.commitment}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.commitmentText}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.compliance}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.complianceText}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.features}</h2>
              <ul className="space-y-2 text-base text-muted-foreground">
                {t.featuresText.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{t.feedback}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t.feedbackText}
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">{t.contact}</h3>
                <p className="text-base text-muted-foreground mb-2">{t.email}</p>
                <p className="text-base text-muted-foreground">{t.phone}</p>
              </div>
            </section>

            <section className="mb-12">
              <p className="text-sm text-muted-foreground">
                {t.lastUpdated}
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/" 
                className="text-primary hover:opacity-80 transition-opacity"
                aria-label="Back to homepage"
              >
                ← {language === 'de' ? 'Zurück zur Startseite' : 'Back to Homepage'}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Accessibility;