import React from 'react';
import heroVisual from '../hero-tech-visual.png';

/**
 * Hero figurine slot — desktop layout on all viewports.
 * Asset MUST be a true transparent PNG (src/hero-tech-visual.png).
 */
export const HeroTechVisual: React.FC = () => {
  return (
    <div
      id="hero-tech-visual"
      className="absolute flex items-end justify-center origin-bottom pointer-events-none select-none overflow-visible"
      style={{
        left: '80%',
        bottom: '28px',
        height: '75%',
        width: 'min(50vw, 600px)',
        zIndex: 2,
        transform: 'translateX(-50%) scale(1.25)',
      }}
      aria-hidden
    >
      <img
        src={heroVisual}
        alt=""
        draggable={false}
        className="hero-tech-visual-img max-h-full max-w-full w-auto h-auto object-contain object-bottom"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
