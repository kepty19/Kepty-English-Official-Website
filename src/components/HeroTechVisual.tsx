import React from 'react';
import heroVisual from '../hero-tech-visual.png';

/** Desktop: right column overlay */
export const HeroTechVisual: React.FC = () => (
  <div
    id="hero-tech-visual"
    className="hidden md:flex absolute z-[2] pointer-events-none select-none overflow-visible origin-bottom items-end justify-center
      left-[80%] -translate-x-1/2 bottom-7 h-[75%] w-[min(50vw,600px)] scale-125"
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

/** Mobile: in-flow, larger centered image */
export const HeroTechVisualMobile: React.FC = () => (
  <div className="md:hidden w-full flex justify-center items-center py-1" aria-hidden>
    <img
      src={heroVisual}
      alt=""
      draggable={false}
      className="hero-tech-visual-img w-[min(96vw,440px)] max-h-[52vh] object-contain object-bottom"
      referrerPolicy="no-referrer"
    />
  </div>
);
