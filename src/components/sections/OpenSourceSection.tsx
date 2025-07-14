
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 section-padding bg-black text-white">
      <div className="container-width">
        <div className="text-center space-y-8 mb-12">
          <h2 className="headline-text text-white">
            Keine Blackbox. Keine Geheimnisse.<br />
            Nur brillanter Code.
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wir glauben, dass die Zukunft der Enterprise AI offen sein muss. Deshalb ist unser Sovereign 
            Agentic Layer vollständig Open Source. Das bedeutet für Sie nicht nur die Freiheit von jeglichem 
            Vendor-Lock-in, sondern auch ein Höchstmaß an Transparenz, Sicherheit und Flexibilität. Schauen 
            Sie unter die Haube, passen Sie den Code an Ihre Bedürfnisse an oder werden Sie Teil unserer 
            wachsenden Community.
          </p>
        </div>

        <div className="text-center mb-12">
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-200">
            <Github className="mr-2 h-5 w-5" />
            Zum GitHub-Repository
          </Button>
        </div>

        {/* Open Source Technology Logos */}
        <div className="text-center space-y-6">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Aufbauend auf bewährten Open-Source-Technologien
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">Kubernetes</div>
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">Docker</div>
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">Python</div>
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">TypeScript</div>
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">Redis</div>
            <div className="px-4 py-2 border border-gray-600 text-sm text-white">PostgreSQL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
