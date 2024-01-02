import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './PathQuery/subComponent/Navigation.jsx';
import HomePage from './PathQuery/pages/HomePage.jsx';
import NowPlayingPage from './PathQuery/pages/NowPlayingPage.jsx';
import SearchPage from './PathQuery/pages/SearchPage.jsx';
import UpcomingPage from './PathQuery/pages/UpcomingPage.jsx';
import DetailPage from "./PathQuery/pages/DetailPage.jsx";

function Pract4PathQuery() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default Pract4PathQuery;

// Tugas 
// - menampilkan halaman Detail Movie yang dapat diakses melalui daftar film atau URL /movies/:id. dan
// - menambahkan query/search parameter pada fitur pencarian film.
