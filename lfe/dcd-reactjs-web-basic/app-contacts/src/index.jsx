import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import './styles/style.css';
 
createRoot(document.getElementById('root')).render(<ContactApp />);