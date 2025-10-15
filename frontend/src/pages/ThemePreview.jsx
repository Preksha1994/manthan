import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSectionV2 from '../components/HeroSectionV2';
import PortfolioSection from '../components/PortfolioSection';
import StorySection from '../components/StorySection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../styles/theme-navy-coral.css';
import '../styles/theme-burgundy-cream.css';
import '../styles/theme-teal-coral.css';

const ThemePreview = () => {
  const [currentTheme, setCurrentTheme] = useState('current');

  const themes = [
    { id: 'current', name: 'Current - Warm Orange', colors: ['#ff965a', '#ffd1e7'] },
    { id: 'navy-coral', name: 'Navy & Coral', colors: ['#1e3a5f', '#ff6b5a'] },
    { id: 'burgundy-cream', name: 'Burgundy & Cream', colors: ['#8b2f39', '#d4a574'] },
    { id: 'teal-coral', name: 'Teal & Coral', colors: ['#0d7377', '#ff6b6b'] },
  ];

  return (
    <div className="relative">
      {/* Theme Selector - Fixed at bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full shadow-2xl p-2 flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setCurrentTheme(theme.id)}
            className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
              currentTheme === theme.id
                ? 'bg-black text-white scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {theme.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <span>{theme.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Content based on theme */}
      {currentTheme === 'current' ? (
        <div className="App">
          <Header />
          <main>
            <section className="hero-section relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"></div>
              <div className="absolute top-20 right-10 w-72 h-72 bg-mid-orange/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-mid-pink/10 rounded-full blur-3xl"></div>
              
              <div className="relative max-w-8xl mx-auto px-4 lg:px-8 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-black">
                        Sculpting
                        <br />
                        <span className="text-mid-orange">Memories</span>
                        <br />
                        Into Reality
                      </h1>
                      <p className="body-large text-dark-grey max-w-xl">
                        Hyper-realistic silicone sculptures that capture every emotion, every detail, every memory.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="cta-button large">View Our Work</button>
                      <button className="px-8 py-4 rounded-full border-2 border-black text-black font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all">
                        Start Your Journey
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8">
                      <div>
                        <div className="font-display text-4xl font-bold text-mid-orange">100+</div>
                        <div className="caption text-dark-grey mt-1">Sculptures Created</div>
                      </div>
                      <div>
                        <div className="font-display text-4xl font-bold text-mid-orange">15+</div>
                        <div className="caption text-dark-grey mt-1">Years Experience</div>
                      </div>
                      <div>
                        <div className="font-display text-4xl font-bold text-mid-orange">98%</div>
                        <div className="caption text-dark-grey mt-1">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
                        alt="Hyper-realistic sculpture"
                        className="w-full h-[500px] lg:h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                      <p className="body-small text-dark-grey italic">
                        "We don't just sculpt faces – we sculpt memories."
                      </p>
                      <p className="caption text-mid-orange mt-2 font-semibold">- Twinzy Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PortfolioSection />
            <StorySection />
            <ProcessSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      ) : (
        <div className={`App theme-${currentTheme}`}>
          <Header />
          <main>
            <HeroSectionV2 theme={currentTheme} />
            <PortfolioSection />
            <StorySection />
            <ProcessSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ThemePreview;
