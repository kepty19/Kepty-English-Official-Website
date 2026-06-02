import React from 'react';
import heroVisual from '../hero-tech-visual.png';

/**
 * Hero 3D visual — desktop: right column; mobile: centered above fold bottom.
 */
export const HeroTechVisual: React.FC = () => {
  return (
    <div
      id="hero-tech-visual"
      className="absolute z-[2] pointer-events-none select-none overflow-visible origin-bottom flex items-end justify-center
        left-1/2 -translate-x-1/2
        bottom-[5.5rem] h-[38%] w-[min(94vw,360px)] scale-[0.82]
        md:left-[80%] md:bottom-7 md:h-[75%] md:w-[min(50vw,600px)] md:scale-125 md:-translate-x-1/2"
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
