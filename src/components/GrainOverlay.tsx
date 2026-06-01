import React from 'react';
import { GRAIN_SVG_DATA_URI } from '../data';

export const GrainOverlay: React.FC = () => {
  return (
    <div
      id="grain-noise-overlay"
      className="absolute inset-0 pointer-events-none select-none mix-blend-overlay"
      style={{
        backgroundImage: `url("${GRAIN_SVG_DATA_URI}")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
        opacity: 0.4,
        zIndex: 50,
      }}
    />
  );
};
