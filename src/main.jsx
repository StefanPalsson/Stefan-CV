import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.jsx'; // Du har redan skapat denna
import './App.css'; // Behåll detta som det är

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> {/* 👈 Detta ska användas, inte App */}
  </React.StrictMode>
);
