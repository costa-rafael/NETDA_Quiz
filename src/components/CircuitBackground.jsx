import React, { useEffect, useState } from 'react';
import './CircuitBackground.css';

export default function CircuitBackground() {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    // Generate some random circuit paths
    const newPaths = [];
    for (let i = 0; i < 15; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      let d = `M ${startX} ${startY}`;
      
      let currentX = startX;
      let currentY = startY;
      
      const segments = Math.floor(Math.random() * 4) + 2;
      for (let j = 0; j < segments; j++) {
        const direction = Math.floor(Math.random() * 4);
        const length = Math.random() * 20 + 10;
        
        switch (direction) {
          case 0: currentX += length; break; // Right
          case 1: currentX -= length; break; // Left
          case 2: currentY += length; break; // Down
          case 3: currentY -= length; break; // Up
          default: break;
        }
        
        // Add 45-degree angles occasionally
        if (Math.random() > 0.5) {
          const diag = Math.random() > 0.5 ? length : -length;
          currentX += diag;
          currentY += diag;
        }

        // Keep within bounds
        currentX = Math.max(0, Math.min(100, currentX));
        currentY = Math.max(0, Math.min(100, currentY));

        d += ` L ${currentX} ${currentY}`;
      }

      newPaths.push({
        id: i,
        d,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * -20, // Negative delay to start mid-animation
        opacity: Math.random() * 0.4 + 0.1,
        endX: currentX,
        endY: currentY,
        startX: startX,
        startY: startY
      });
    }
    setPaths(newPaths);
  }, []);

  return (
    <div className="circuit-background">
      <div className="circuit-overlay"></div>
      <svg className="circuit-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
        {paths.map((path) => (
          <g key={path.id}>
            {/* The circuit line */}
            <path
              d={path.d}
              className="circuit-path"
              style={{
                 animationDuration: `${path.duration}s`,
                 animationDelay: `${path.delay}s`,
                 opacity: path.opacity
              }}
            />
            {/* The pulsing nodes at the end and start */}
            <circle cx={path.startX} cy={path.startY} r="0.5" className="circuit-node" style={{ opacity: path.opacity }} />
            <circle cx={path.endX} cy={path.endY} r="0.8" className="circuit-node pulsing-node" style={{ opacity: path.opacity }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
