import React from 'react';
import { ParticleWave } from '@/components/ParticleWave';
export function HeroSection() {
  return <section className="min-h-screen flex flex-col justify-center py-20">
      {/* Text content - centered with section padding */}
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="mb-8">
              <img src="/lovable-uploads/d0d90e3f-d4de-4963-b8e5-038fa00ed0f2.png" alt="Agentic Layer Logo" className="mx-auto h-2/6 w-auto dark:hidden" />
              <img src="/lovable-uploads/c3326386-2b61-4e04-84bf-2c05f8177e81.png" alt="Agentic Layer Logo" className="mx-auto h-2/6 w-auto hidden dark:block" />
            </div>
            
            <h1 className="headline-text">
              Das Gen-AI-Paradoxon
            </h1>
            
          </div>
        </div>
      </div>
      
      {/* Dots Animation - replacing video */}
      <div className="mt-16 section-padding">
        <div className="container-width">
          <div className="relative w-full" style={{
          aspectRatio: '16/9'
        }}>
            <ParticleWave />
          </div>
        </div>
      </div>
    </section>;
}