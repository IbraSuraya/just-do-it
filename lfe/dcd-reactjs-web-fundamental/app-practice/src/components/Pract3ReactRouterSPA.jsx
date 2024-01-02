import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './SimpleSPA/HomePage.jsx'
import AboutPage from './SimpleSPA/AboutPage.jsx'
import FAQPage from './SimpleSPA/FAQPage.jsx'

function Pract3ReactRouterSPA() {
  return (
    <>
      <header>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/faq" target="_blank">FAQ</Link> </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
    </>
  );
}

export default Pract3ReactRouterSPA