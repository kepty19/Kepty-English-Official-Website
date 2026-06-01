import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    __keptyBootTimer?: ReturnType<typeof setTimeout>;
  }
}

if (window.__keptyBootTimer) {
  clearTimeout(window.__keptyBootTimer);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
