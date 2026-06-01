import { FigurineItem } from './types';
import player1 from './characters/player-1.png';
import player2 from './characters/player-2.png';
import player3 from './characters/player-3.png';
import player4 from './characters/player-4.png';

export const FIGURINES: FigurineItem[] = [
  {
    src: player1,
    bg: '#E55C29',
    panel: '#F79B7F',
    name: 'Player 01',
    tagline: 'Kepty English coaching athlete',
  },
  {
    src: player2,
    bg: '#C44315',
    panel: '#E55C29',
    name: 'Player 02',
    tagline: 'Kepty English coaching athlete',
  },
  {
    src: player3,
    bg: '#922704',
    panel: '#C44315',
    name: 'Player 03',
    tagline: 'Kepty English coaching athlete',
  },
  {
    src: player4,
    bg: '#FF6331',
    panel: '#F4845F',
    name: 'Player 04',
    tagline: 'Kepty English coaching athlete',
  },
];

// SVG Grain Overlay URL
export const GRAIN_SVG_DATA_URI =
  `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.08' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;
