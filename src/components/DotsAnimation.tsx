
import React, { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  originalX: number;
  originalY: number;
}

export const DotsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [phase, setPhase] = useState<'chaos' | 'transition' | 'harmony'>('chaos');
  const dotsRef = useRef<Dot[]>([]);
  const startTimeRef = useRef<number>(Date.now());

  const DOT_COUNT = 40; // Reduced for better visibility
  const DOT_SIZE = 4; // Slightly larger
  const TRANSITION_DURATION = 2000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize dots
    const initializeDots = () => {
      dotsRef.current = [];
      const width = canvas.width;
      const height = canvas.height;
      
      console.log('Initializing dots with canvas dimensions:', width, 'x', height);
      
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * (width - DOT_SIZE * 4) + DOT_SIZE * 2,
          y: Math.random() * (height - DOT_SIZE * 4) + DOT_SIZE * 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          targetX: 0,
          targetY: 0,
          originalX: 0,
          originalY: 0,
        });
      }
    };

    // Calculate wave positions with proper bounds checking
    const calculateWavePositions = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      const amplitude = Math.min(height * 0.15, 60); // Limit amplitude
      
      console.log('Calculating wave positions for canvas:', width, 'x', height);
      console.log('Center Y:', centerY, 'Amplitude:', amplitude);
      
      dotsRef.current.forEach((dot, index) => {
        // Distribute dots evenly across width with padding
        const padding = width * 0.1;
        const availableWidth = width - (padding * 2);
        const x = padding + (availableWidth / (DOT_COUNT - 1)) * index;
        
        // Simple sine wave: 2 complete cycles across the width
        const frequency = (2 * Math.PI * 2) / width;
        const y = centerY + Math.sin(x * frequency) * amplitude;
        
        // Ensure positions are within bounds
        dot.targetX = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, x));
        dot.targetY = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, y));
        dot.originalX = dot.x;
        dot.originalY = dot.y;
        
        // Debug first few dots
        if (index < 3) {
          console.log(`Dot ${index}: target (${dot.targetX.toFixed(1)}, ${dot.targetY.toFixed(1)})`);
        }
      });
    };

    // Resize canvas with minimum dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const minWidth = 400;
      const minHeight = 225;
      
      canvas.width = Math.max(rect.width, minWidth);
      canvas.height = Math.max(rect.height, minHeight);
      
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
      
      if (canvas.width > 0 && canvas.height > 0) {
        initializeDots();
      }
    };

    // Animation loop
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;

      // Clear canvas with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Phase transitions
      if (elapsed > 5000 && phase === 'chaos') {
        console.log('Transitioning to wave formation');
        setPhase('transition');
        calculateWavePositions();
      }

      // Count visible dots for debugging
      let visibleDots = 0;

      // Update dots based on phase
      dotsRef.current.forEach((dot, index) => {
        if (phase === 'chaos') {
          // Chaotic movement with proper bounds
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x <= DOT_SIZE || dot.x >= width - DOT_SIZE) {
            dot.vx *= -1;
            dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, dot.x));
          }
          if (dot.y <= DOT_SIZE || dot.y >= height - DOT_SIZE) {
            dot.vy *= -1;
            dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, dot.y));
          }
        } else if (phase === 'transition') {
          // Smooth transition to wave
          const transitionProgress = Math.min((elapsed - 5000) / TRANSITION_DURATION, 1);
          const eased = 1 - Math.pow(1 - transitionProgress, 3);
          
          dot.x = dot.originalX + (dot.targetX - dot.originalX) * eased;
          dot.y = dot.originalY + (dot.targetY - dot.originalY) * eased;

          if (transitionProgress >= 1) {
            setPhase('harmony');
            console.log('Entered harmony phase');
          }
        } else if (phase === 'harmony') {
          // Gentle wave movement
          const time = (elapsed - 7000) * 0.0005;
          const waveOffset = Math.sin(time + index * 0.1) * 20;
          const verticalFloat = Math.sin(time * 2 + index * 0.3) * 8;
          
          dot.x = dot.targetX + waveOffset;
          dot.y = dot.targetY + verticalFloat;
          
          // Ensure dots stay in bounds during harmony phase
          dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, dot.x));
          dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, dot.y));
        }

        // Count dots that are visible
        if (dot.x >= 0 && dot.x <= width && dot.y >= 0 && dot.y <= height) {
          visibleDots++;
        }

        // Draw dot with white color
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      // Debug visible dots count occasionally
      if (Math.floor(elapsed / 1000) !== Math.floor((elapsed - 16) / 1000)) {
        console.log(`Phase: ${phase}, Visible dots: ${visibleDots}/${DOT_COUNT}`);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    
    // Start animation after a brief delay
    const timeoutId = setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0) {
        animate();
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      startTimeRef.current = Date.now();
      setPhase('chaos');
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
  }, []); // Removed phase dependency to prevent re-initialization

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};
