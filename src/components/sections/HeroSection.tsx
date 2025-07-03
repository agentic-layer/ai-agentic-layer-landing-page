
import React from 'react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-20">
      <div className="container-width">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="headline-text">
            Das Gen-AI-Paradoxon
          </h1>
          <p className="subheadline-text max-w-4xl mx-auto">
            Ihre KI-Anwendungen sind brillant, aber sie spielen nicht zusammen. 
            Das Ergebnis ist Lärm, keine Symphonie.
          </p>
          
          {/* Video Integration */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <div className="absolute inset-0 bg-muted border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-lg">
                  Video wird hier eingebettet (16:9 Format)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
