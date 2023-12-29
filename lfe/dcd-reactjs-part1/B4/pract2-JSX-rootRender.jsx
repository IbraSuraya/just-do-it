import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from '../img/dicoding-logo.png';

// Create element with JSX
const element = (
  <div id="biodata">
    <h1 id="headerTitle" className="lightblue-paragraph">
      Biodata Perusahaan
    </h1>
    <ul>
      <li>Nama: MakSur</li>
      <li>Bidang: FnB (Food and Beverage)</li>
      <li>Tagline: Selalu ada</li>
    </ul>
    {/* cara pertama */}
    {/* <img src="dicoding-logo.png" alt="Dicoding logo" /> */}
    {/* <img
      src="https://raw.githubusercontent.com/dicodingacademy/BelajarDasarPemrogramanWeb/099-shared-files/dicoding-logo.png"
      alt="Dicoding logo"
    /> */}
    {/* cara kedua : Moduliraze */}
    <img src={DicodingLogo} alt="logo" />
  </div>
);
// console.log(element);

// Dibikin one line
createRoot(document.getElementById('root')).render(element);
