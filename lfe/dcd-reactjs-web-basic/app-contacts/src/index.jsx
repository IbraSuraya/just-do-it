import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ContactApp from './components/ContactApp.jsx';
import './styles/style.css';
 
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);