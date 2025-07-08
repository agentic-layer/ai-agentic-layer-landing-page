
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number; // target x
  ty: number; // target y
  opacity: number;
  size: number;
}

export const DotsAnimation: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number>(0);
  const waveStartedRef = useRef<boolean>(false);
  const [currentPhase, setCurrentPhase] = useState<'chaos' | 'harmony' | 'transition'>('chaos');

  const PARTICLE_COUNT = 60;
  const BASE_PARTICLE_SIZE = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas first
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const minWidth = 400;
      const minHeight = 225;
      
      canvas.width = Math.max(rect.width, minWidth);
      canvas.height = Math.max(rect.height, minHeight);
      
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
    };

    // Initialize particles after canvas is properly sized
    const initializeParticles = () => {
      particlesRef.current = [];
      const width = canvas.width;
      const height = canvas.height;
      
      if (width <= 0 || height <= 0) return;
      
      console.log('Initializing particles with canvas dimensions:', width, 'x', height);
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          tx: 0,
          ty: 0,
          opacity: Math.random() * 0.5 + 0.5,
          size: BASE_PARTICLE_SIZE + Math.random() * 2,
        });
      }
    };

    // Animation loop
    const animate = (timestamp: number) => {
      const width = canvas.width;
      const height = canvas.height;
      
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = (timestamp - startTimeRef.current) / 1000; // Convert to seconds
      const centerY = height / 2;

      // Update phase for text animation
      if (elapsed < 4) {
        setCurrentPhase('chaos');
      } else if (elapsed < 5) {
        setCurrentPhase('transition');
      } else if (elapsed < 14) {
        setCurrentPhase('harmony');
      } else if (elapsed < 15) {
        setCurrentPhase('transition');
      } else {
        setCurrentPhase('chaos');
      }

      // Clear canvas with theme-aware background
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((particle, i) => {
        if (elapsed < 5) {
          // Phase 1: chaos
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.opacity = Math.random() * 0.5 + 0.3;
          particle.size = BASE_PARTICLE_SIZE + Math.random() * 2;

          // Bounce off edges
          if (particle.x <= particle.size || particle.x >= width - particle.size) {
            particle.vx *= -1;
            particle.x = Math.max(particle.size, Math.min(width - particle.size, particle.x));
          }
          if (particle.y <= particle.size || particle.y >= height - particle.size) {
            particle.vy *= -1;
            particle.y = Math.max(particle.size, Math.min(height - particle.size, particle.y));
          }
        } else if (elapsed < 15) {
          // Phase 2: transition to harmony - multi-wave structure
          if (!waveStartedRef.current) {
            waveStartedRef.current = true;
          }
          
          // Calculate target positions for flowing multi-wave pattern
          const spacing = width / PARTICLE_COUNT;
          particle.tx = i * spacing;
          
          // Create multiple overlapping sine waves with different frequencies and phases
          const time = timestamp * 0.001;
          const wave1 = Math.sin(particle.tx * 0.008 + time * 2) * 60;
          const wave2 = Math.sin(particle.tx * 0.015 + time * -1.5) * 40;
          const wave3 = Math.sin(particle.tx * 0.005 + time * 3) * 80;
          
          // Combine waves for complex flowing pattern
          particle.ty = centerY + wave1 + wave2 * 0.7 + wave3 * 0.3;

          // Spring-like interpolation toward wave positions
          particle.x += (particle.tx - particle.x) * 0.08;
          particle.y += (particle.ty - particle.y) * 0.08;
          
          // Smooth opacity and size transitions
          particle.opacity = 0.8 + Math.sin(time * 2 + i * 0.1) * 0.2;
          particle.size = BASE_PARTICLE_SIZE + Math.sin(time * 1.5 + i * 0.2) * 1.5;
        } else {
          // Phase 3: reset to chaos
          if (waveStartedRef.current) {
            // Reset for new chaos phase
            waveStartedRef.current = false;
            startTimeRef.current = timestamp;
            particle.vx = (Math.random() - 0.5) * 2;
            particle.vy = (Math.random() - 0.5) * 2;
          }
        }

        // Draw particle with glow effect
        const alpha = Math.max(0, Math.min(1, particle.opacity));
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        
        if (isDark) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          gradient.addColorStop(0.4, `rgba(255, 255, 255, ${alpha * 0.6})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(0, 0, 0, ${alpha})`);
          gradient.addColorStop(0.4, `rgba(0, 0, 0, ${alpha * 0.6})`);
          gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start
    resizeCanvas();
    initializeParticles();
    
    const timeoutId = setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0 && particlesRef.current.length > 0) {
        startTimeRef.current = performance.now();
        animate(startTimeRef.current);
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initializeParticles();
      startTimeRef.current = performance.now();
      waveStartedRef.current = false;
      console.log('Animation reset due to resize');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#000000' }}
      />
      
      {/* Text overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4 max-w-4xl">
          {/* Chaos text */}
          <p 
            className={`subheadline-text transition-opacity duration-1000 ${
              currentPhase === 'chaos' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Ihre KI-Anwendungen spielen nicht zusammen
          </p>
          
          {/* Harmony text */}
          <p 
            className={`subheadline-text transition-opacity duration-1000 absolute top-0 left-0 right-0 ${
              currentPhase === 'harmony' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Formen Sie Ihre KI-Anwendungen mit dem Agentic Layer<br />zu einer harmonischen Symphonie.
          </p>
        </div>
      </div>
    </div>
  );
};
