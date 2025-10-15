import React, { useEffect } from 'react';
import './App.css';
import WorldClassDesign from './pages/WorldClassDesign';

// Simple AOS-like functionality
function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observer.observe(el));

    // Observe scroll sections
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <WorldClassDesign />;
}

export default App;
