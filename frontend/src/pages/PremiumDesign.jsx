import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Users, Sparkles, ChevronRight } from 'lucide-react';
import TwinzyLogo from '../components/TwinzyLogo';
import '../styles/premium-design.css';

const PremiumDesign = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Presidential Legacy',
      category: 'Life-Size Sculpture',
      image: 'https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2',
      description: 'Capturing the essence of leadership and dignity in hyper-realistic silicone',
    },
    {
      id: 2,
      title: 'Musical Legend',
      category: 'Full Body Art',
      image: 'https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb',
      description: 'Preserving the spirit of performance and artistry',
    },
    {
      id: 3,
      title: 'Pop Icon',
      category: 'Half-Body Portrait',
      image: 'https://images.unsplash.com/photo-1643113232724-c7f36cb4bd41',
      description: 'Meticulous detail in costume and expression',
    },
    {
      id: 4,
      title: 'Classical Master',
      category: 'Bust Collection',
      image: 'https://images.unsplash.com/photo-1719582116363-a55de8b46222',
      description: 'Timeless artistry meets modern precision',
    },
  ];

  return (
    <div className="premium-design">
      {/* Premium Navigation */}
      <nav className="premium-nav">
        <div className="premium-nav-content">
          <TwinzyLogo inverted={true} />
          <div className="premium-nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <button className="premium-cta-nav">Commission a Sculpture</button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="premium-hero">
        <div className="premium-hero-grid">
          <div className="premium-hero-left">
            <span className="premium-badge">Est. 2009 • Master Artisans</span>
            <h1 className="premium-hero-title">
              Where Art
              <br />
              Meets
              <br />
              <span className="gradient-text">Memory</span>
            </h1>
            <p className="premium-hero-subtitle">
              Hyper-realistic silicone sculptures that immortalize the human form with unprecedented precision and artistry.
            </p>
            <div className="premium-hero-actions">
              <button className="premium-btn-primary">
                Explore Our Gallery
                <ArrowRight size={20} />
              </button>
              <button className="premium-btn-secondary">
                <Play size={18} />
                Watch Process
              </button>
            </div>
            <div className="premium-stats">
              <div className="premium-stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Masterpieces</span>
              </div>
              <div className="premium-stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Years Crafting</span>
              </div>
              <div className="premium-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="premium-hero-right" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <div className="premium-hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
                alt="Sculpture"
                className="premium-hero-image"
              />
              <div className="premium-image-overlay"></div>
              <div className="premium-floating-card">
                <Sparkles size={24} className="card-icon" />
                <p>"Every detail matters. Every emotion captured. Every memory preserved forever."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="premium-work">
        <div className="premium-section-header">
          <span className="premium-section-label">Portfolio</span>
          <h2 className="premium-section-title">Sculptural Excellence</h2>
        </div>
        
        <div className="premium-work-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`premium-work-item ${index % 2 === 0 ? 'large' : 'small'}`}
            >
              <div className="premium-work-image-wrapper">
                <img src={item.image} alt={item.title} className="premium-work-image" />
                <div className="premium-work-overlay">
                  <span className="work-category">{item.category}</span>
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-description">{item.description}</p>
                  <button className="work-explore">
                    View Details <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Asymmetric */}
      <section id="about" className="premium-about">
        <div className="premium-about-grid">
          <div className="premium-about-images">
            <div className="about-image-1">
              <img src="https://images.pexels.com/photos/2362469/pexels-photo-2362469.jpeg" alt="Sculpture detail" />
            </div>
            <div className="about-image-2">
              <img src="https://images.unsplash.com/photo-1653255657076-6ac54333e2f4" alt="Artisan at work" />
            </div>
          </div>
          <div className="premium-about-content">
            <span className="premium-section-label gold">Our Philosophy</span>
            <h2 className="premium-about-title">Sculpting the
            <br />Essence of
            <br />Humanity</h2>
            <p className="premium-about-text">
              Since 2009, Twinzy has been at the forefront of hyper-realistic sculpture artistry. Our master artisans blend traditional sculpting techniques with cutting-edge silicone technology to create pieces that blur the line between art and reality.
            </p>
            <p className="premium-about-text">
              Each sculpture is a labor of love, taking months of meticulous work to capture not just the physical likeness, but the soul, the spirit, and the story of the subject.
            </p>
            <div className="premium-about-features">
              <div className="about-feature">
                <Award className="feature-icon" size={32} />
                <h4>Award-Winning</h4>
                <p>International recognition for artistic excellence</p>
              </div>
              <div className="about-feature">
                <Users className="feature-icon" size={32} />
                <h4>Master Artisans</h4>
                <p>Team of specialized sculptors with decades of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section id="process" className="premium-process">
        <div className="premium-process-header">
          <span className="premium-section-label">Our Craft</span>
          <h2 className="premium-section-title">From Vision to Reality</h2>
          <p className="premium-process-subtitle">A meticulous journey of artistry and precision</p>
        </div>

        <div className="premium-timeline">
          <div className="timeline-item">
            <div className="timeline-number">01</div>
            <div className="timeline-content">
              <h3>Discovery & Planning</h3>
              <p>In-depth consultation to understand your vision, story, and requirements. We capture detailed photographs and measurements from every angle.</p>
            </div>
            <div className="timeline-visual">
              <div className="timeline-circle"></div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">02</div>
            <div className="timeline-content">
              <h3>Clay Sculpting</h3>
              <p>Our master sculptors hand-craft the initial form in clay, capturing every subtle feature, wrinkle, and expression with artistic precision.</p>
            </div>
            <div className="timeline-visual">
              <div className="timeline-circle"></div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">03</div>
            <div className="timeline-content">
              <h3>Silicone Casting</h3>
              <p>Using premium medical-grade silicone, we create molds and casts that preserve every microscopic detail of the original sculpture.</p>
            </div>
            <div className="timeline-visual">
              <div className="timeline-circle"></div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">04</div>
            <div className="timeline-content">
              <h3>Finishing Artistry</h3>
              <p>Hand-painting, hair insertion, and final detailing bring the sculpture to life. Each piece undergoes rigorous quality inspection.</p>
            </div>
            <div className="timeline-visual">
              <div className="timeline-circle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-cta">
        <div className="premium-cta-content">
          <h2 className="premium-cta-title">Ready to Immortalize Your Story?</h2>
          <p className="premium-cta-text">
            Whether preserving a loved one's memory, creating a museum exhibit, or commissioning a unique art piece, we're here to bring your vision to life.
          </p>
          <div className="premium-cta-buttons">
            <button className="premium-btn-primary large">
              Start Your Commission
              <ArrowRight size={22} />
            </button>
            <button className="premium-btn-outline large">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="premium-footer-content">
          <div className="footer-column">
            <TwinzyLogo inverted={true} className="footer-logo-component" />
            <p style={{ marginTop: '1rem' }}>Sculpting memories into reality since 2009</p>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>hello@twinzy.studio</p>
            <p>+1 (234) 567-890</p>
            <p>123 Art District, Creative Quarter</p>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <p>Life-Size Sculptures</p>
            <p>Half-Body Portraits</p>
            <p>Bust Collections</p>
            <p>Custom Commissions</p>
          </div>
          <div className="footer-column">
            <h4>Follow</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="premium-footer-bottom">
          <p>© 2024 Twinzy - The Sculpture Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PremiumDesign;
