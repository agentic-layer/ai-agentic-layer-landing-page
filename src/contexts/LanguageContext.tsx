
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('de');

  const translations = {
    de: {
      // Particle Animation
      'particle.chaos.title': 'Runter vom PoC,<br />Rauf auf die Produktiv-Pipeline!',
      'particle.chaos.subtitle': 'Deine Agenten brauchen mehr als nur ein Dockerfile.',
      'particle.harmony.title': '<span class="hidden md:inline">Meet the Agentic Layer.<br />Your Control Plane for Intelligent Workloads.</span><span class="md:hidden">Meet the<br />Agentic Layer.<br />Your Control Plane  for Intelligent Workloads.</span>',
      'particle.harmony.subtitle': 'Verwandle isolierte KI-Agenten in eine Enterprise-grade Workforce.',

      // Navigation
      'nav.benefits': 'Vorteile',
      'nav.architecture': 'Architektur',
      'nav.openSource': 'Open Source',
      'nav.contact': 'Kontakt',

      // Hero Section
      'hero.title': 'Der Agentic Layer',
      'hero.subtitle': 'Die souveräne Enterprise AI-Plattform',
      'hero.description': 'Orchestriere KI-Agenten sicher, transparent und zukunftsfähig in deiner IT-Infrastruktur. Open Source, cloud-agnostisch und DSGVO-konform.',

      // Business Benefits Section
      'benefits.title': 'Deine Brücke zur souveränen KI-Orchestrierung',
      'benefits.subtitle': 'Wir geben dir die Kontrolle, Sicherheit und Flexibilität, damit du das volle Potenzial von Agentic AI in deinem Unternehmen entfesseln\nkannst.\nKein Boilerplate, keine Kopfschmerzen.',
      'benefits.playground.title': 'Dein Playground, Deine Regeln.',
      'benefits.playground.description': 'Du hast die volle Hoheit über deine Daten, Modelle und die Infra – egal ob Cloud oder On-Prem.',
      'benefits.orchestrated.title': 'Smart orchestriert, effizient skaliert.',
      'benefits.orchestrated.description': 'Verbinde isolierte KI-Aufrufe zu nahtlosen, unternehmensweiten Prozessen. Unser Layer kümmert sich um Verteilung, Steuerung und Überwachung deiner gesamten Agenten-Workforce.',
      'benefits.open.title': 'Offen & Agnostisch: Deine Freiheit.',
      'benefits.open.description': 'Kein Vendor-Lock-in. Unser Open-Source-Ansatz schafft volle Transparenz, während das agnostische Design die freie Wahl von Clouds, Modellen und Tools garantiert.',
      'benefits.audit.title': 'Audit-Ready & DSGVO-Konform.',
      'benefits.audit.description': 'EU AI Act? DSGVO? Kein Thema. Wir haben Governance, Transparenz und Audit-Fähigkeit von Grund auf eingebaut. So bleiben deine Agenten nicht nur smart, sondern auch sauber.',

      // Architecture Section
      'architecture.title': 'So funktioniert der Agentic Layer',
      'architecture.subtitle': 'Das technische Rückgrat für smarte Workloads.',
      'architecture.blueprint.title': 'Architektur Blueprint',
      'architecture.blueprint.description': 'Du baust smarte Agenten? Wir liefern dir das Fundament. Unsere Architektur ist auf maximale Souveränität, Sicherheit und nahtlose Interoperabilität ausgelegt. Der Agentic Layer fungiert als zentrales Nervensystem deiner KI-Workforce: Er ist modular aufgebaut und bietet die notwendigen Abstraktionen, um deine Agenten zu orchestrieren, zu kontrollieren und sicher in deiner bestehenden IT-Landschaft zu integrieren.',
      'architecture.features.title': 'Technische Merkmale & Eigenschaften',

      // Open Source Section
      'opensource.title': 'Keine Blackbox.\nKeine Geheimnisse.\nNur brillanter Code.',
      'opensource.subtitle': 'Der Agentic Layer ist Open Source.',
      'opensource.description': 'Wir sind der Überzeugung, dass die Zukunft von Enterprise AI auf Offenheit basiert. Unser Agentic Layer ist daher Open Source. Dies eliminiert Vendor-Lock-in und schafft ein Höchstmaß an Transparenz, Betriebssicherheit und architektonischer Flexibilität. Schau selbst unter die Haube, passe den Code an deine Bedürfnisse an oder bring dich in unserer wachsenden Community ein.',
      'opensource.control': 'Du hast die Kontrolle.',
      'opensource.button': 'GitHub Repo-Launch in Kürze!',

      // CTA Section
      'cta.title': 'Agentic AI erleben?',
      'cta.subtitle': 'Jetzt scannen lassen, zum Newsletter anmelden und\nmit etwas Glück Konferenz-Tickets gewinnen.',
      'cta.description': 'Mit deinem Newsletter-Abo bleibst du nicht nur auf dem Laufenden, sondern hast auch die Chance, Tickets für Top-Tech-Konferenzen wie die KI Navigator oder die CLC zu gewinnen. Wir freuen uns, wenn wir uns an unserem Stand oder in unseren Workshops weiter über das Thema Agentic AI mit dir austauschen können.\n\nSneak Peek: Mario-Leander Reimer, CTO der QAware, hält auf der CLC seinen spannenden Workshop „Architektur und Aufbau einer Cloud-nativen AI-Plattform". Dieser bietet eine praktische Schritt-für-Schritt-Anleitung für das Design und den Aufbau von KI-Plattformen, sowohl lokal als auch in der Public Cloud.\n\nJetzt anmelden, exklusive Einblicke sichern und vielleicht schon bald live dabei sein!',
      'cta.card.title': 'Hast du weitere Fragen?',
      'cta.card.description': 'Das Agentic Layer Team freut sich auf deine Kontaktaufnahme!\n\nSchreibe uns, wie wir dir auf deinem Weg zum Agentic Layer weiterhelfen können.',
      'cta.card.button': 'E-Mail schreiben',
    },
    en: {
      // Particle Animation
      'particle.chaos.title': 'From PoC to Production Pipeline!',
      'particle.chaos.subtitle': 'Your agents need more than just a Dockerfile.',
      'particle.harmony.title': '<span class="hidden md:inline">Meet the Agentic Layer.<br />Your Control Plane for Intelligent Workloads.</span><span class="md:hidden">Meet the<br />Agentic Layer.<br />Your Control Plane for Intelligent Workloads.</span>',
      'particle.harmony.subtitle': 'Transform isolated AI agents into an enterprise-grade workforce.',

      // Navigation
      'nav.benefits': 'Benefits',
      'nav.architecture': 'Architecture',
      'nav.openSource': 'Open Source',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title': 'The Agentic Layer',
      'hero.subtitle': 'The Sovereign Enterprise AI Platform',
      'hero.description': 'Orchestrate AI agents securely, transparently, and future-proof in your IT infrastructure. Open source, cloud-agnostic, and GDPR-compliant.',

      // Business Benefits Section
      'benefits.title': 'Your Bridge to Sovereign AI Orchestration',
      'benefits.subtitle': 'We give you the control, security, and flexibility to unleash\nthe full potential of Agentic AI in your enterprise.\nNo boilerplate, no headaches.',
      'benefits.playground.title': 'Your Playground, Your Rules.',
      'benefits.playground.description': 'You have full sovereignty over your data, models, and infrastructure – whether cloud or on-premises.',
      'benefits.orchestrated.title': 'Smart Orchestrated, Efficiently Scaled.',
      'benefits.orchestrated.description': 'Connect isolated AI calls into seamless, enterprise-wide processes. Our layer handles distribution, control, and monitoring of your entire agent workforce.',
      'benefits.open.title': 'Open & Agnostic: Your Freedom.',
      'benefits.open.description': 'No vendor lock-in. Our open-source approach creates full transparency, while the agnostic design guarantees free choice of clouds, models, and tools.',
      'benefits.audit.title': 'Audit-Ready & GDPR-Compliant.',
      'benefits.audit.description': 'EU AI Act? GDPR? No problem. We have built governance, transparency, and audit capability from the ground up. Your agents stay not only smart but also compliant.',

      // Architecture Section
      'architecture.title': 'How the Agentic Layer Works',
      'architecture.subtitle': 'The technical backbone for smart workloads.',
      'architecture.blueprint.title': 'Architecture Blueprint',
      'architecture.blueprint.description': 'Building smart agents? We provide the foundation. Our architecture is designed for maximum sovereignty, security, and seamless interoperability. The Agentic Layer serves as the central nervous system of your AI workforce: It is modularly built and offers the necessary abstractions to orchestrate, control, and securely integrate your agents into your existing IT landscape.',
      'architecture.features.title': 'Technical Features & Properties',

      // Open Source Section
      'opensource.title': 'No Black Box.\nNo Secrets.\nJust Brilliant Code.',
      'opensource.subtitle': 'The Agentic Layer is Open Source.',
      'opensource.description': 'We believe that the future of Enterprise AI is built on openness. Our Agentic Layer is therefore open source. This eliminates vendor lock-in and creates maximum transparency, operational security, and architectural flexibility. Look under the hood yourself, adapt the code to your needs, or contribute to our growing community.',
      'opensource.control': 'You are in control.',
      'opensource.button': 'GitHub Repo Launch Coming Soon!',

      // CTA Section
      'cta.title': 'Experience Agentic AI?',
      'cta.subtitle': 'Get scanned now, subscribe to the newsletter, and\nwin conference tickets with a bit of luck.',
      'cta.description': 'With your newsletter subscription, you not only stay up to date but also have the chance to win tickets for top tech conferences like the AI Navigator or the CLC. We look forward to continuing our discussion about Agentic AI with you at our booth or in our workshops.\n\nSneak Peek: Mario-Leander Reimer, CTO of QAware, will host his exciting workshop "Architecture and Construction of a Cloud-native AI Platform" at the CLC. This provides a practical step-by-step guide for designing and building AI platforms, both locally and in the public cloud.\n\nSign up now, secure exclusive insights, and maybe be there live soon!',
      'cta.card.title': 'Do you have more questions?',
      'cta.card.description': 'The Agentic Layer team looks forward to hearing from you!\n\nTell us how we can help you on your journey to the Agentic Layer.',
      'cta.card.button': 'Write Email',
    },
  };

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
