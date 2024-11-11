import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CharacterContextProvider } from './context/CharacterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </StrictMode>
);
