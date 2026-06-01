import React from 'react';
import { FigurineItem, CarouselRole } from '../types';

interface CarouselItemProps {
  item: FigurineItem;
  role: CarouselRole;
  isMobile: boolean;
  isActive: boolean;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item, role, isMobile, isActive }) => {
  // If not the center item, do not render to completely hide background characters
  if (role !== 'center') {
    return null;
  }

  // Styles based on center role - aligned with the highlighted blue oval on the right
  // Scaled beautifully to fit the blue frame precisely (desktop scale 1.25, mobile scale 0.92) and positioned on the right
  const transform = `translateX(-50%) scale(${isMobile ? 0.92 : 1.25})`;
  const filter = 'blur(0px)';
  const opacity = 1;
  const zIndex = 20;
  const left = isMobile ? '50%' : '80%';
  const height = isMobile ? '50%' : '75%';
  const bottom = isMobile ? '56px' : '72px';

  // Combined transition property for butter-smooth animations
  const transitionsList = [
    'transform 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    'filter 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    'left 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    'bottom 650ms cubic-bezier(0.4, 0, 0.2, 1)',
    'height 650ms cubic-bezier(0.4, 0, 0.2, 1)'
  ].join(', ');

  return (
    <div
      id={`carousel-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="absolute aspect-[0.6/1] flex flex-col items-center justify-end select-none cursor-pointer overflow-visible origin-bottom"
      style={{
        transform,
        filter,
        opacity,
        zIndex,
        left,
        height,
        bottom,
        transition: transitionsList,
        willChange: 'transform, filter, opacity, left, bottom, height',
      }}
    >
      {/* Main Figurine Image without frames */}
      <img
        src={item.src}
        alt={item.name}
        draggable={false}
        className="w-full h-full object-contain object-bottom select-none z-10 transition-all duration-500 hover:scale-105 pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
