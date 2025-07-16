
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function OpenSourceSection() {
  const headerRef = useScrollReveal();
  const buttonRef = useScrollReveal({ delay: 200 });

  return (
    <section id="open-source" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-12" ref={headerRef}>
          <h2 className="headline-text">
            Keine Blackbox.<br />
            Keine Geheimnisse.<br />
            Nur brillanter Code.
          </h2>
          <p className="subheadline-text">Der Agentic Layer ist Open Source.</p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Wir sind der Überzeugung, dass die Zukunft von Enterprise AI auf Offenheit basiert. Unser Agentic
            Layer ist daher Open Source. Dies eliminiert Vendor-Lock-in und schafft ein Höchstmaß an
            Transparenz, Betriebssicherheit und architektonischer
            Flexibilität. Schau selbst unter die Haube, passe den Code an deine Bedürfnisse an oder bring dich in
            unserer wachsenden Community ein.
            <p>
              Du hast die Kontrolle.
            </p>
          </p>
        </div>

        <div className="text-center mb-12" ref={buttonRef}>
          <Button size="lg" className="text-lg px-8 py-4">
            <Github className="mr-2 h-5 w-5" />
            GitHub Repo-Launch in Kürze!
          </Button>
        </div>

        {/* Open Source Technology Logos */}
        
      </div>
    </section>
  );
}
