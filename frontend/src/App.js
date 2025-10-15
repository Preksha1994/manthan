import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WorldClassDesign from './pages/WorldClassDesign';
import DetailedProcess from './pages/DetailedProcess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorldClassDesign />} />
        <Route path="/process" element={<DetailedProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
