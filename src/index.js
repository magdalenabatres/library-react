import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // opcional, si tienes estilos globales

// Crea el punto de entrada de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);