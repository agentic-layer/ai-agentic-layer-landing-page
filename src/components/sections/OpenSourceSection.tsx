
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
export function OpenSourceSection() {
  return <section id="open-source" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-12">
          <p className="subheadline-text">Der Agentic Layer ist Open Source</p>
          <h2 className="headline-text">
            Keine Blackbox. Keine Geheimnisse.<br />
            Nur brillanter Code.
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Wir glauben, dass die Zukunft der Enterprise AI offen sein muss. Deshalb ist unser Sovereign 
            Agentic Layer vollständig Open Source. Das bedeutet für Sie nicht nur die Freiheit von jeglichem 
            Vendor-Lock-in, sondern auch ein Höchstmaß an Transparenz, Sicherheit und Flexibilität. Schauen 
            Sie unter die Haube, passen Sie den Code an Ihre Bedürfnisse an oder werden Sie Teil unserer 
            wachsenden Community.
          </p>
        </div>

        <div className="text-center mb-12">
          <Button size="lg" className="text-lg px-8 py-4">
            <Github className="mr-2 h-5 w-5" />
            stay tuned
          </Button>
        </div>

        {/* Open Source Technology Logos */}
        
      </div>
    </section>;
}
