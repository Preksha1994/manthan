import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-mid-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-mid-pink/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-8xl mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
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
                className="px-8 py-4 rounded-full border-2 border-black text-black font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
              >
                Start Your Journey
              </button>
            </div>

            {/* Stats */}
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
              <p className="caption text-mid-orange mt-2 font-semibold">- Twinzy Studio</p>
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
        <ArrowDown size={32} className="text-mid-orange" />
      </button>
    </section>
  );
};

export default HeroSection;