import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import './styles/themes.css';
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes('THREE.Clock')) return;
  originalWarn(...args);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
