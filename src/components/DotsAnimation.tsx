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

  const DOT_COUNT = 60;
  const DOT_SIZE = 3;
  const TRANSITION_DURATION = 2000; // 2 seconds transition

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
      
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * (width - DOT_SIZE * 2) + DOT_SIZE,
          y: Math.random() * (height - DOT_SIZE * 2) + DOT_SIZE,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          targetX: 0,
          targetY: 0,
          originalX: 0,
          originalY: 0,
        });
      }
    };

    // Calculate wave positions
    const calculateWavePositions = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      const amplitude = height * 0.12; // Smaller amplitude for better visibility
      
      dotsRef.current.forEach((dot, index) => {
        // Distribute dots evenly across the width
        const x = (width / (DOT_COUNT - 1)) * index;
        // Create sine wave with proper frequency
        const frequency = (4 * Math.PI) / width; // 2 complete waves across width
        const y = centerY + Math.sin(x * frequency) * amplitude;
        
        dot.targetX = x;
        dot.targetY = y;
        dot.originalX = dot.x;
        dot.originalY = dot.y;
      });
    };

    // Resize canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Only initialize if we have valid dimensions
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

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Phase transitions
      if (elapsed > 5000 && phase === 'chaos') {
        setPhase('transition');
        calculateWavePositions();
      }

      // Update dots based on phase
      dotsRef.current.forEach((dot, index) => {
        if (phase === 'chaos') {
          // Chaotic movement
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x <= DOT_SIZE || dot.x >= width - DOT_SIZE) {
            dot.vx *= -1;
          }
          if (dot.y <= DOT_SIZE || dot.y >= height - DOT_SIZE) {
            dot.vy *= -1;
          }

          // Keep dots in bounds
          dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, dot.x));
          dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, dot.y));
        } else if (phase === 'transition') {
          // Smooth transition to wave
          const transitionProgress = Math.min((elapsed - 5000) / TRANSITION_DURATION, 1);
          const eased = 1 - Math.pow(1 - transitionProgress, 3); // Ease out cubic
          
          dot.x = dot.originalX + (dot.targetX - dot.originalX) * eased;
          dot.y = dot.originalY + (dot.targetY - dot.originalY) * eased;

          if (transitionProgress >= 1) {
            setPhase('harmony');
          }
        } else if (phase === 'harmony') {
          // Harmonic wave movement
          const time = (elapsed - 7000) * 0.001;
          const waveOffset = Math.sin(time * 0.3) * 30; // Horizontal wave movement
          const verticalFloat = Math.sin(time * 1.5 + index * 0.2) * 15; // Individual floating
          
          dot.x = dot.targetX + waveOffset;
          dot.y = dot.targetY + verticalFloat;
          
          // Ensure dots stay in bounds during harmony phase
          dot.x = Math.max(DOT_SIZE, Math.min(width - DOT_SIZE, dot.x));
          dot.y = Math.max(DOT_SIZE, Math.min(height - DOT_SIZE, dot.y));
        }

        // Draw dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    
    // Small delay to ensure canvas is properly sized
    setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0) {
        animate();
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      // Reset animation on resize
      startTimeRef.current = Date.now();
      setPhase('chaos');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};
