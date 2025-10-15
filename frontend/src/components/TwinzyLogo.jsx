import React from 'react';

const TwinzyLogo = ({ className = '', inverted = false }) => {
  return (
    <div className={`twinzy-logo ${className}`}>
      <div className="logo-main">
        <span className={inverted ? 'text-white' : 'text-black'} style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
          Twin
        </span>
        <span style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #DAA520, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          zy
        </span>
      </div>
      <div className="logo-tagline" style={{ fontSize: '0.5rem', letterSpacing: '0.1em', color: inverted ? '#999' : '#666', marginTop: '-0.25rem', fontWeight: 400 }}>
        The Sculpture Studio
      </div>
    </div>
  );
};

export default TwinzyLogo;
