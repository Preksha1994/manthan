import React, { useState, useEffect } from 'react';
import { Phone, Play, Star, Award, Users, Clock, CheckCircle, ArrowRight, Sparkles, Heart, MessageCircle } from 'lucide-react';
import '../styles/ultra-engaging.css';

const UltraEngagingDesign = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showCTAPopup, setShowCTAPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => setShowCTAPopup(true), 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const testimonials = [
  {
    name: "Aparna Sharma",
    role: "Homemaker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5,
    text: "Twinzy created a masterpiece for our family. The hyper-realistic detail is extraordinary. Everyone who visits can't believe it's a sculpture!"
  },
  {
    name: "Pawan Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    rating: 5,
    text: "They captured my father's essence with incredible precision. Every wrinkle, every expression - it's like he's still with us. Worth every penny."
  },
  {
    name: "Amit Patel",
    role: "Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 5,
    text: "Twinzy's craftsmanship is unmatched. The attention to detail and emotional depth captured in silicone is remarkable. Highly recommend!"
  }];


  return (
    <div className="ultra-engaging">
      {/* Sticky Enhanced Navigation */}
      <nav className="ultra-nav">
        <div className="ultra-nav-container">
          <div className="nav-logo-section">
            <img
              src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
              alt="Twinzy - Hyper-Realistic Silicone Sculptures"
              className="ultra-logo" />
          </div>
          <div className="nav-links">
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Reviews</a>
            <a href="/process">Our Process</a>
            <a href="#about">About</a>
          </div>
          <button className="nav-cta-btn pulse-btn">
            <Phone size={18} />
            <span>Call Now for More Details</span>
          </button>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="ultra-hero">
        <div className="hero-video-bg">
          <div className="video-placeholder">
            <img
              src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
              alt="Hyper-realistic sculpture background"
              className="hero-bg-image" />

            <div className="video-overlay"></div>
          </div>
        </div>

        <div className="hero-content-grid">
          <div className="hero-left">
            <div className="trust-badges">
              <div className="trust-badge">
                <Users size={20} />
                <span>30+ Happy Clients</span>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="title-gradient">Preserving Legacies Through the Art of Sculpture</span>
            </h1>

            <p className="hero-subtitle">
              Transform cherished moments into breathtaking life-size sculptures. Museum-quality artistry that captures the essence, emotion, and beauty of those you hold dear - keeping memories alive through hyper-realistic craftsmanship.
            </p>

            <div className="hero-features">
              <div className="feature-check">
                <CheckCircle size={20} />
                <span>High-grade silicone for lifelike skin texture</span>
              </div>
              <div className="feature-check">
                <CheckCircle size={20} />
                <span>Hand-painted with microscopic detail precision</span>
              </div>
              <div className="feature-check">
                <CheckCircle size={20} />
                <span>Individual hair insertion for authentic realism</span>
              </div>
            </div>

            <div className="hero-cta-section">
              <button className="mega-cta-btn">
                <Phone size={24} className="phone-ring" />
                <div className="cta-text">
                  <span className="cta-main">Call Now: +91 9270205007</span>
                  <span className="cta-sub">For More Details - Limited Slots Available</span>
                </div>
              </button>
              <button className="secondary-cta-btn">
                <Play size={20} />
                <span>Watch Our Process</span>
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-showcase">
              <img
                src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2"
                alt="Presidential sculpture example"
                className="showcase-image" />

              <div className="showcase-badge">
                <Sparkles size={32} />
                <p>"Every detail matters"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="social-proof-bar">
          <div className="proof-item">
            <Star fill="#e94e3d" color="#e94e3d" size={24} />
            <div>
              <strong>4.9/5</strong>
              <span>Average Rating</span>
            </div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <Users size={24} />
            <div>
              <strong>30+</strong>
              <span>Sculptures Created</span>
            </div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <Award size={24} />
            <div>
              <strong>Years of expertise</strong>
              <span>Master Craftsmanship</span>
            </div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <Heart size={24} />
            <div>
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="video-showcase">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">BEHIND THE ARTISTRY</span>
            <h2 className="section-title">See Our Hyper-Realistic Sculptures Come to Life</h2>
            <p className="section-description">Watch the meticulous craftsmanship and artistic precision that goes into creating each masterpiece</p>
          </div>

          <div className="video-grid">
            <div className="video-card main-video">
              <div className="video-thumbnail">
                <img src="https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb" alt="Sculpture process video" />
                <button className="play-button">
                  <Play size={48} />
                </button>
                <div className="video-duration">5:30</div>
              </div>
              <h3>From Vision to Hyper-Realistic Silicone Sculpture</h3>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <img src="https://images.unsplash.com/photo-1643113232724-c7f36cb4bd41" alt="Detail work video" />
                <button className="play-button small">
                  <Play size={32} />
                </button>
                <div className="video-duration">2:15</div>
              </div>
              <h3>Hair Insertion Technique</h3>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <img src="https://images.unsplash.com/photo-1719582116363-a55de8b46222" alt="Painting video" />
                <button className="play-button small">
                  <Play size={32} />
                </button>
                <div className="video-duration">3:45</div>
              </div>
              <h3>Skin Tone Hand-Painting</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with SEO Keywords */}
      <section id="gallery" className="ultra-gallery">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">PORTFOLIO</span>
            <h2 className="section-title">Museum-Quality Hyper-Realistic Silicone Sculptures</h2>
            <p className="section-description">Life-size wax figures, memorial sculptures, and custom silicone statues crafted with unparalleled precision</p>
          </div>

          <div className="gallery-masonry">
            <div className="gallery-item large">
              <img src="https://images.unsplash.com/photo-1643113232611-8cbc1683cfc2" alt="Life-size presidential sculpture hyper-realistic" />
              <div className="gallery-overlay">
                <span className="gallery-category">LIFE-SIZE SCULPTURE</span>
                <h3>Presidential Portrait</h3>
                <p>Museum-commissioned masterpiece</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb" alt="Musical legend wax figure silicone statue" />
              <div className="gallery-overlay">
                <span className="gallery-category">CELEBRITY SCULPTURE</span>
                <h3>Musical Legend</h3>
                <p>Performance captured in silicone</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1643113232724-c7f36cb4bd41" alt="Pop star hyper-realistic bust sculpture" />
              <div className="gallery-overlay">
                <span className="gallery-category">HALF-BODY PORTRAIT</span>
                <h3>Pop Icon</h3>
                <p>Costume detail perfection</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/2362469/pexels-photo-2362469.jpeg" alt="Classical bust collection silicone sculptures" />
              <div className="gallery-overlay">
                <span className="gallery-category">BUST COLLECTION</span>
                <h3>Heritage Series</h3>
                <p>Museum exhibition pieces</p>
              </div>
            </div>

            <div className="gallery-item tall">
              <img src="https://images.unsplash.com/photo-1653255657076-6ac54333e2f4" alt="Family memorial sculpture custom silicone" />
              <div className="gallery-overlay">
                <span className="gallery-category">MEMORIAL SCULPTURE</span>
                <h3>Family Legacy</h3>
                <p>Preserving cherished memories</p>
              </div>
            </div>
          </div>

          <div className="gallery-cta">
            <a href="/process" className="view-process-btn">
              <span>View Our Detailed 14-Step Process</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">CLIENT TESTIMONIALS</span>
            <h2 className="section-title">What Our Clients Say About Their Sculptures</h2>
            <div className="rating-display">
              {[...Array(5)].map((_, i) =>
              <Star key={i} size={28} fill="#e94e3d" color="#e94e3d" />
              )}
              <span className="rating-text">4.9/5 from 30+ reviews</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) =>
            <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} size={16} fill="#e94e3d" color="#e94e3d" />
                  )}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="verified-badge">
                  <CheckCircle size={16} />
                  <span>Verified Client</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Transform Memories into Masterpieces?</h2>
            <div className="cta-buttons">
              <button className="massive-cta-btn">
                <Phone size={28} className="phone-ring" />
                <div className="cta-text-block">
                  <span className="cta-main-text">Call Now: +91 9270205007</span>
                  <span className="cta-sub-text">For More Details</span>
                </div>
              </button>
            </div>
            <div className="cta-trust-signals">
              <div className="trust-item">
                <CheckCircle size={20} />
                <span>3-Year Warranty</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={20} />
                <span>Flexible payment plans</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={20} />
                <span>Lifetime care support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ultra-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <img
                  src="https://customer-assets.emergentagent.com/job_lifelikeart/artifacts/tog633sh_twinzy-high-resolution-logo-transparent.png"
                  alt="Twinzy Sculptures"
                  className="footer-logo" />

              </div>
              <p>Hyper-realistic silicone sculptures, wax figures, and memorial statues since 2023</p>
              <div className="seo-keywords">
                <span>Life-size sculptures</span>
                <span>Hyper-realistic wax figures</span>
                <span>Silicone statues</span>
                <span>Memorial sculptures</span>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#">Life-Size Sculptures</a>
                <a href="#">Half-Body Portraits</a>
                <a href="#">Bust Collections</a>
                <a href="#">Memorial Statues</a>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p><strong>Phone:</strong> +91 9270205007</p>
                <p><strong>Email:</strong> info@twinzysculptures.com</p>
                <p><strong>Hours:</strong> Mon-Sat 9AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Twinzy - The Sculpture Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Popup */}
      {showCTAPopup &&
      <div className="floating-cta-popup">
          <button className="popup-close" onClick={() => setShowCTAPopup(false)}>×</button>
          <div className="popup-content">
            <Phone size={32} className="popup-icon" />
            <h3>Still Thinking?</h3>
            <p>Get a FREE consultation now!</p>
            <button className="popup-cta-btn">
              Call +91 9270205007
            </button>
          </div>
        </div>
      }
    </div>);

};

export default UltraEngagingDesign;