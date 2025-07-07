
import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number; // target x
  ty: number; // target y
}

export const DotsAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const dotsRef = useRef<Dot[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const waveStartedRef = useRef<boolean>(false);

  const DOT_COUNT = 40;
  const DOT_SIZE = 4;
  const PHASE_DURATION = 5000; // 5 seconds per phase

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

    // Initialize dots after canvas is properly sized
    const initializeDots = () => {
      dotsRef.current = [];
      const width = canvas.width;
      const height = canvas.height;
      
      if (width <= 0 || height <= 0) return;
      
      console.log('Initializing dots with canvas dimensions:', width, 'x', height);
      
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          tx: 0,
          ty: 0,
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

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      dotsRef.current.forEach((dot, i) => {
        if (elapsed < 5) {
          // Phase 1: chaos
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
        } else if (elapsed < 15) {
          // Phase 2: transition to harmony
          if (!waveStartedRef.current) {
            waveStartedRef.current = true;
          }
          
          // Calculate target positions using current canvas dimensions
          const spacing = width / DOT_COUNT;
          dot.tx = i * spacing;
          // Create moving sine wave - phase moves the wave from left to right
          const waveFrequency = 0.01; // Controls how many waves across the width
          const phase = timestamp * 0.001; // Controls speed of wave movement (slower)
          dot.ty = centerY + Math.sin(dot.tx * waveFrequency + phase) * 120;

          // Spring-like interpolation toward sine wave positions
          dot.x += (dot.tx - dot.x) * 0.05;
          dot.y += (dot.ty - dot.y) * 0.05;
        } else {
          // Phase 3: reset to chaos
          if (waveStartedRef.current) {
            // Reset for new chaos phase
            waveStartedRef.current = false;
            startTimeRef.current = timestamp;
            dot.vx = (Math.random() - 0.5) * 2;
            dot.vy = (Math.random() - 0.5) * 2;
          }
        }

        // Draw dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start
    resizeCanvas();
    initializeDots();
    
    const timeoutId = setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0 && dotsRef.current.length > 0) {
        startTimeRef.current = performance.now();
        animate(startTimeRef.current);
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initializeDots();
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};
