import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown, Eye, Heart, Award } from 'lucide-react';
import '../styles/world-class-design.css';

const WorldClassDesign = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Presidential Portrait',
      subtitle: 'Life-Size Masterpiece',
      image: 'https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2',
      category: 'ICONIC FIGURES',
    },
    {
      id: 2,
      title: 'Musical Legend',
      subtitle: 'Capturing Performance',
      image: 'https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb',
      category: 'ARTISTS',
    },
    {
      id: 3,
      title: 'Pop Culture Icon',
      subtitle: 'Detail Perfection',
      image: 'https://images.unsplash.com/photo-1643113232724-c7f36cb4bd41',
      category: 'CELEBRITIES',
    },
  ];

  return (
    <div className="world-class-design">
      {/* Floating Navigation */}
      <nav className="world-nav">
        <div className="world-nav-content">
          <div className="world-logo-wrapper">
            <img 
              src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
              alt="Twinzy"
              className="world-logo"
            />
          </div>
          <div className="world-nav-menu">
            <a href="#work" className="nav-item">Work</a>
            <a href="#craft" className="nav-item">Craft</a>
            <a href="#about" className="nav-item">About</a>
            <button className="world-cta-btn">
              <span>Begin Your Legacy</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Immersive */}
      <section className="world-hero scroll-section" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-badge" data-aos="fade-up">
            <span className="badge-dot"></span>
            <span>Master Artisans Since 2009</span>
          </div>
          
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            <span className="title-line">Sculpting</span>
            <span className="title-line title-emphasis">Humanity</span>
            <span className="title-line">In Silicone</span>
          </h1>
          
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
            We create hyper-realistic silicone sculptures that transcend art—
            <br />preserving memories, capturing emotions, immortalizing legacies.
          </p>

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <button className="hero-btn-primary">
              <span>Explore Gallery</span>
              <div className="btn-shine"></div>
            </button>
            <button className="hero-btn-secondary">
              <Play size={20} />
              <span>Watch Process</span>
            </button>
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Sculptures</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-image-section" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
          <div className="hero-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
              alt="Hyper-realistic sculpture"
              className="hero-image"
            />
            <div className="image-overlay"></div>
            <div className="image-frame"></div>
          </div>
          <div className="floating-badge" data-aos="fade-left" data-aos-delay="500">
            <Sparkles size={24} className="badge-icon" />
            <p>"Every detail matters. Every memory preserved."</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown size={32} className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Featured Work - Bento Grid */}
      <section id="work" className="world-work scroll-section">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Where Art Meets Reality</h2>
          <p className="section-subtitle">Each sculpture is a masterpiece of precision, emotion, and artistry</p>
        </div>

        <div className="bento-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bento-item bento-${index + 1}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bento-image-wrapper">
                <img src={item.image} alt={item.title} className="bento-image" />
                <div className="bento-overlay">
                  <span className="bento-category">{item.category}</span>
                  <h3 className="bento-title">{item.title}</h3>
                  <p className="bento-subtitle">{item.subtitle}</p>
                  <button className="bento-btn">
                    <Eye size={18} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Large Feature Card */}
          <div className="bento-item bento-feature" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-content">
              <div className="feature-icon">
                <Award size={48} />
              </div>
              <h3>Award-Winning Craftsmanship</h3>
              <p>Recognized globally for pushing the boundaries of hyper-realistic sculpture artistry</p>
              <button className="feature-link">
                <span>View All Work</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craft - Split Screen */}
      <section id="craft" className="world-craft scroll-section">
        <div className="craft-grid">
          <div className="craft-images" data-aos="fade-right">
            <div className="craft-image-stack">
              <div className="craft-image-1">
                <img src="https://images.pexels.com/photos/2362469/pexels-photo-2362469.jpeg" alt="Sculpture detail" />
              </div>
              <div className="craft-image-2">
                <img src="https://images.unsplash.com/photo-1653255657076-6ac54333e2f4" alt="Artisan work" />
              </div>
            </div>
          </div>

          <div className="craft-content" data-aos="fade-left">
            <span className="section-label">Our Philosophy</span>
            <h2 className="craft-title">
              Capturing the
              <br />
              <span className="title-highlight">Essence</span>
              <br />
              of Humanity
            </h2>
            <p className="craft-description">
              Since 2009, we've been at the forefront of hyper-realistic sculpture. Our master artisans blend centuries-old techniques with cutting-edge silicone technology.
            </p>
            <p className="craft-description">
              Each sculpture takes months of meticulous work—capturing not just physical likeness, but the soul, spirit, and story of every subject.
            </p>

            <div className="craft-features">
              <div className="craft-feature-item">
                <div className="feature-number">01</div>
                <div className="feature-content-item">
                  <h4>Precision Engineering</h4>
                  <p>Medical-grade silicone and proprietary techniques</p>
                </div>
              </div>
              <div className="craft-feature-item">
                <div className="feature-number">02</div>
                <div className="feature-content-item">
                  <h4>Artistic Mastery</h4>
                  <p>Hand-painted details and hair insertion</p>
                </div>
              </div>
              <div className="craft-feature-item">
                <div className="feature-number">03</div>
                <div className="feature-content-item">
                  <h4>Emotional Depth</h4>
                  <p>Capturing personality and essence</p>
                </div>
              </div>
            </div>

            <button className="craft-cta">
              <span>Our Process</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="world-testimonial scroll-section">
        <div className="testimonial-content" data-aos="zoom-in">
          <div className="testimonial-icon">
            <Heart size={48} />
          </div>
          <blockquote className="testimonial-quote">
            "Twinzy transformed our memories into art. The detail and emotion captured in the sculpture is beyond words. It's not just a piece—it's a legacy."
          </blockquote>
          <div className="testimonial-author">
            <div className="author-info">
              <p className="author-name">Sarah Mitchell</p>
              <p className="author-title">Museum Director, Heritage Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="world-cta scroll-section">
        <div className="cta-content" data-aos="fade-up">
          <h2 className="cta-title">Ready to Create Your Legacy?</h2>
          <p className="cta-description">
            Whether preserving a cherished memory or commissioning museum-quality art,
            <br />we bring your vision to life with unparalleled precision.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary">
              <span>Start Your Commission</span>
              <ArrowRight size={22} />
            </button>
            <button className="cta-btn-secondary">
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="world-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <img 
                src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
                alt="Twinzy"
                className="footer-logo"
              />
              <p className="footer-tagline">Sculpting memories into reality since 2009</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#">Life-Size Sculptures</a>
                <a href="#">Half-Body Portraits</a>
                <a href="#">Bust Collections</a>
                <a href="#">Custom Commissions</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Our Process</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p>hello@twinzy.studio</p>
                <p>+1 (234) 567-890</p>
                <p>123 Art District</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Twinzy - The Sculpture Studio. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorldClassDesign;
