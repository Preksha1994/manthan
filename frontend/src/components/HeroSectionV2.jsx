import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSectionV2 = ({ theme = 'navy-coral' }) => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const themeConfig = {
    'navy-coral': {
      heroGradient: 'from-[#1e3a5f] via-[#2c5282] to-[#ff6b5a]',
      accentText: 'text-[#ff6b5a]',
      statColor: 'text-[#ff6b5a]',
      decorativeBlob1: 'bg-[#ff6b5a]/20',
      decorativeBlob2: 'bg-[#1e3a5f]/20',
    },
    'burgundy-cream': {
      heroGradient: 'from-[#faf8f5] via-[#f5e6d3] to-[#e8c9a0]',
      accentText: 'text-[#8b2f39]',
      statColor: 'text-[#8b2f39]',
      decorativeBlob1: 'bg-[#d4a574]/30',
      decorativeBlob2: 'bg-[#8b2f39]/20',
    },
    'teal-coral': {
      heroGradient: 'from-[#f0feff] via-[#c2f0f2] to-[#ffd3d3]',
      accentText: 'text-[#ff6b6b]',
      statColor: 'text-[#0d7377]',
      decorativeBlob1: 'bg-[#ff6b6b]/20',
      decorativeBlob2: 'bg-[#0d7377]/20',
    },
  };

  const config = themeConfig[theme] || themeConfig['navy-coral'];

  return (
    <section className="hero-section relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${config.heroGradient}`}></div>
      
      {/* Decorative elements */}
      <div className={`absolute top-20 right-10 w-72 h-72 ${config.decorativeBlob1} rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-20 left-10 w-96 h-96 ${config.decorativeBlob2} rounded-full blur-3xl`}></div>
      
      <div className="relative max-w-8xl mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight ${theme === 'burgundy-cream' ? 'text-[#2d1e1a]' : theme === 'teal-coral' ? 'text-[#1a3334]' : 'text-white'}`}>
                Sculpting
                <br />
                <span className={config.accentText}>Memories</span>
                <br />
                Into Reality
              </h1>
              <p className={`body-large max-w-xl ${theme === 'navy-coral' ? 'text-gray-100' : 'text-dark-grey'}`}>
                Hyper-realistic silicone sculptures that capture every emotion, every detail, every memory. We transform photographs into timeless 3D creations that preserve your loved ones forever.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPortfolio}
                className="cta-button large"
              >
                View Our Work
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 rounded-full border-2 font-mono text-sm uppercase tracking-wider transition-all ${
                  theme === 'navy-coral' 
                    ? 'border-white text-white hover:bg-white hover:text-[#1e3a5f]'
                    : theme === 'burgundy-cream'
                    ? 'border-[#8b2f39] text-[#8b2f39] hover:bg-[#8b2f39] hover:text-white'
                    : 'border-[#0d7377] text-[#0d7377] hover:bg-[#0d7377] hover:text-white'
                }`}
              >
                Start Your Journey
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className={`font-display text-4xl font-bold ${config.statColor}`}>100+</div>
                <div className={`caption mt-1 ${theme === 'navy-coral' ? 'text-gray-200' : 'text-dark-grey'}`}>Sculptures Created</div>
              </div>
              <div>
                <div className={`font-display text-4xl font-bold ${config.statColor}`}>15+</div>
                <div className={`caption mt-1 ${theme === 'navy-coral' ? 'text-gray-200' : 'text-dark-grey'}`}>Years Experience</div>
              </div>
              <div>
                <div className={`font-display text-4xl font-bold ${config.statColor}`}>98%</div>
                <div className={`caption mt-1 ${theme === 'navy-coral' ? 'text-gray-200' : 'text-dark-grey'}`}>Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
                alt="Hyper-realistic sculpture"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="body-small text-dark-grey italic">
                "We don't just sculpt faces – we sculpt memories."
              </p>
              <p className={`caption mt-2 font-semibold ${config.accentText}`}>- Twinzy Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className={config.accentText} />
      </button>
    </section>
  );
};

export default HeroSectionV2;
