
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.benefits': 'Vorteile',
    'nav.architecture': 'Architektur',
    'nav.openSource': 'Open Source',
    'nav.contact': 'Kontakt',
    'nav.impressum': 'Impressum',
    
    // Hero Section
    'hero.title': 'Die nächste Generation von Enterprise AI Anwendungen',
    'hero.subtitle': 'Agentic Layer revolutioniert die Art, wie Unternehmen KI-Agenten entwickeln, bereitstellen und verwalten. Unsere Plattform ermöglicht es, intelligente, autonome Systeme zu schaffen, die komplexe Geschäftsprozesse automatisieren.',
    'hero.cta': 'Jetzt starten',
    
    // Footer
    'footer.copyright': '© 2025 Agentic Layer.',
    
    // Language selector
    'lang.german': 'Deutsch',
    'lang.english': 'English'
  },
  en: {
    // Navigation
    'nav.benefits': 'Benefits',
    'nav.architecture': 'Architecture',
    'nav.openSource': 'Open Source',
    'nav.contact': 'Contact',
    'nav.impressum': 'Legal Notice',
    
    // Hero Section
    'hero.title': 'The Next Generation of Enterprise AI Applications',
    'hero.subtitle': 'Agentic Layer revolutionizes how enterprises develop, deploy, and manage AI agents. Our platform enables the creation of intelligent, autonomous systems that automate complex business processes.',
    'hero.cta': 'Get Started',
    
    // Footer
    'footer.copyright': '© 2025 Agentic Layer.',
    
    // Language selector
    'lang.german': 'Deutsch',
    'lang.english': 'English'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
