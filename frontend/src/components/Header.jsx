import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_f926e287-6a34-490f-b6e8-a51db27087dd/artifacts/9048ha4b_twinzy-high-resolution-logo-transparent.png" 
              alt="Twinzy - The Sculpture Studio" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-black hover:text-mid-orange transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="nav-link text-black hover:text-mid-orange transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="nav-link text-black hover:text-mid-orange transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="cta-button"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="nav-link text-black hover:text-mid-orange transition-colors text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="nav-link text-black hover:text-mid-orange transition-colors text-left"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="nav-link text-black hover:text-mid-orange transition-colors text-left"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button w-full"
              >
                Get in Touch
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;