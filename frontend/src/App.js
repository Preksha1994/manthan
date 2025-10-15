import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UltraEngagingDesign from './pages/UltraEngagingDesign';
import DetailedProcess from './pages/DetailedProcess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UltraEngagingDesign />} />
        <Route path="/process" element={<DetailedProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
