
import React from 'react';
import { Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      {/* Text content - centered with section padding */}
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="mb-8">
              <img src="/lovable-uploads/c3326386-2b61-4e04-84bf-2c05f8177e81.png" alt="Agentic Layer Logo" className="mx-auto h-2/6 w-auto" />
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h1 className="headline-text">
                Das Gen-AI-Paradoxon
              </h1>
            </div>
            <p className="subheadline-text max-w-4xl mx-auto">
              Ihre KI-Anwendungen sind brillant, aber sie spielen nicht zusammen. 
              Das Ergebnis ist Lärm, keine Symphonie.
            </p>
          </div>
        </div>
      </div>
      
      {/* Video Integration - exactly matching cards section structure */}
      <div className="mt-16 section-padding">
        <div className="container-width">
          <div className="relative w-full" style={{
          aspectRatio: '16/9'
        }}>
            <video className="w-full h-full object-cover" controls autoPlay muted loop playsInline>
              <source src="https://mqelqevuwjpebvaldcym.supabase.co/storage/v1/object/public/video/dots.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
