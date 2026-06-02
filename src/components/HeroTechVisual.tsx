import React from 'react';
import heroVisual from '../hero-tech-visual.png';

interface HeroTechVisualProps {
  isMobile: boolean;
}

/**
 * Hero figurine slot — same geometry as CarouselItem.
 * Asset MUST be a true transparent PNG (src/hero-tech-visual.png).
 * No blend modes, no runtime cutout, no motion on the positioned node.
 */
export const HeroTechVisual: React.FC<HeroTechVisualProps> = ({isMobile}) => {
  const left = isMobile ? '50%' : '80%';
  const bottom = isMobile ? '56px' : '72px';
  const height = isMobile ? '50%' : '75%';
  const scale = isMobile ? 0.92 : 1.25;

  return (
    <div
      id="hero-tech-visual"
      className="absolute flex items-end justify-center origin-bottom pointer-events-none select-none overflow-visible"
      style={{
        left,
        bottom,
        height,
        width: isMobile ? 'min(92vw, 420px)' : 'min(50vw, 600px)',
        zIndex: 2,
        transform: `translateX(-50%) scale(${scale})`,
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
